import { Route, Redirect } from "react-router-dom";
import React, { Component } from "react";
import Login from './authentication/Login'
import LoginManager from '../modules/LoginManager'
import Register from './authentication/Register'
import Searchpage from './Searchpage/Searchpage'
import NavBar from "./nav/NavBar";


export default class ApplicationViews extends Component {

  state = {
    users: [],
    trips: [],
    backpack: []
  };

  // Check if credentials are in local storage
  isAuthenticated = () => sessionStorage.getItem("username") !== null

  componentDidMount() {

    LoginManager.getAll().then(allUsers => {
      this.setState({ users: allUsers });
    })
  }


  // UPDATING FOR THINGS SPECIFIC TO USER (resetting state after you login with a different user)
  updateComponent = () => {
    LoginManager.getAll().then(allUsers => {
      this.setState({ users: allUsers });
    })
  }


  addUser = (user) => LoginManager.post(user)


  render() {
    return (
      <React.Fragment>

        <Route
          exact path="/" render={props => {
            if (this.isAuthenticated()) {
            return <Searchpage {...props}
            />
          } else {
            return <Redirect to="/login" />
          }
            // Remove null and return the component which will show news articles
          }}
        />

        <Route
          path="/login" render={props => {
            return <Login {...props}
            users={this.state.users}
            updateComponent={this.updateComponent}
            />
          }}
        />

        <Route exact path="/register" render={(props) => {
          return <Register {...props}
            addUser={this.addUser}
            updateComponent={this.updateComponent}/>
        }} />

        <Route
          path="/friends" render={props => {
            return null
            // Remove null and return the component which will show list of friends
          }}
        />

        <Route
          path="/messages" render={props => {
            return null
            // Remove null and return the component which will show the messages
          }}
        />

        <Route
          path="/tasks" render={props => {
            return null
            // Remove null and return the component which will show the user's tasks
          }}
        />

      </React.Fragment>
       );
    }
  }
