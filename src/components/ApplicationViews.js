import { Route, Redirect } from "react-router-dom";
import React, { Component } from "react";
import Login from './authentication/Login'
import LoginManager from '../modules/LoginManager'
import Register from './authentication/Register'
import Searchpage from './Searchpage/Searchpage'
import NavBar from "./nav/NavBar";
import Tripspage from "./Trips/Tripspage";
import TripsManager from '../modules/TripsManager'
import TripForm from './Trips/TripForm'
import TripEditForm from "./Trips/TripEditForm"
import ParksMainPage from "./Parks/ParksMainPage"
import ApiManager from "../modules/ApiManager"
import ParksDescriptionPage from "./Parks/ParksDescriptionPage"
import ParksWeatherPage from "./Parks/ParksWeatherPage"
import ParksCampingPage from "./Parks/ParksCampingPage"


export default class ApplicationViews extends Component {

  state = {
    users: [],
    trips: [],
    backpack: [],
    parkName:"",
    parkDescription: "",
    parkWeather: "",
    parklatLong: "",
    parkCampgrounds:[]
  };

  // Check if credentials are in local storage
  isAuthenticated = () => sessionStorage.getItem("username") !== null

  componentDidMount() {
// Getting all the users when the application loads
    LoginManager.getAll().then(allUsers => {
      this.setState({ users: allUsers });
    })

    // GETTING all trips for user:
    TripsManager.getAllTrips()
      .then(allTrips => {
        this.setState({
          trips: allTrips
        })
      })
  }


  // UPDATING FOR THINGS SPECIFIC TO USER (resetting state after you login with a different user)
  updateComponent = () => {
    LoginManager.getAll().then(allUsers => {
      this.setState({ users: allUsers });
    })

    TripsManager.getAllTrips()
      .then(allTrips => {
        this.setState({
          trips: allTrips
        })
      })
  }

  resetSearch = () => {
    this.setState({ parkName: ""});
    this.setState({ parkDescription: ""})
    this.setState({parkWeather: ""})
    this.setState({parklatLong:""})
    this.setState({parkCampgrounds:[]})
  }

// Adding a user to the database from the register form
  addUser = (user) => LoginManager.post(user)



  // TRIPS:
  deleteTrip = (id) => {
    return TripsManager.removeAndList(id)
    .then(() => TripsManager.getAllTrips())
      .then(trips => this.setState({
        trips: trips
      })
      )
  }

  addTrip = (trip) => TripsManager.post(trip)
  .then(() => TripsManager.getAllTrips())
    .then(trips => this.setState({
      trips: trips
    })
  )

  //  EDIT A TRIP:
  updateTrip = (tripId, editedTripObj) => {
    return TripsManager.put(tripId, editedTripObj)
      .then(() => TripsManager.getAllTrips())
      .then(trips => {
        this.setState({
          trips: trips
        })
      })
  }

  // API Call for National Park Name:
  getParkName = (parkName) => {
     return ApiManager.parkNameCall(`${parkName} national park`)
    .then (names => {
      names.data.forEach(name => {
        // console.log(name.fullName)
        // console.log(name.description)
        // console.log(name.weatherInfo)
        // console.log(name.latLong)
        this.setState({
          parkName: name.fullName,
          parkDescription:name.description,
          parkWeather:name.weatherInfo,
          parklatLong:name.latLong
        })
      })
    })
  }

getParkCampsitesAndAminities = (parkName) => {
  return ApiManager.parkCampAndAminCall(`${parkName} national park`)
  .then(allParkInfo => {
  this.setState({
    parkCampgrounds: allParkInfo.data
    })
  })


}

  render() {
    return (
      <React.Fragment>

        <Route
          exact path="/" render={props => {
            if (this.isAuthenticated()) {
            return <Searchpage {...props}
            getParkName={this.getParkName}
            getParkCampsitesAndAminities={this.getParkCampsitesAndAminities}
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
            exact path="/trips" render={props => {
            return <Tripspage {...props}
            trips={this.state.trips}
            deleteTrip={this.deleteTrip}
            updateComponent={this.updateComponent}
            />
          }}
        />


        {/* NEW TRIPS */}
          {/* Route for adding a new trip */}
        <Route path="/trips/new" render={(props) => {
            return <TripForm {...props}
                  addTrip={this.addTrip}
                  trips={this.state.trips}  />
        }} />

        {/* Route for edding a trip */}
        <Route path="/trips/:tripId(\d+)/edit" render={props => {
            return <TripEditForm {...props}
                  updateTrip={this.updateTrip}  />
          }} />


        <Route
          path="/parksMainPage" render={props => {
            return <ParksMainPage {...props}
            parkName={this.state.parkName}
            resetSearch={this.resetSearch}
                  />
            }} />


        <Route
          path="/parkDescription" render={props => {
            return <ParksDescriptionPage {...props}
            parkName={this.state.parkName}
            parkDescription={this.state.parkDescription}
                  />
            }} />


        <Route
          path="/parkAmenities" render={props => {
            return <h1>Park amenities here</h1>
            // Remove null and return the component which will show the user's tasks
          }}
        />

        <Route
          path="/parkCamping" render={props => {
            return <ParksCampingPage {...props}
            parkCampgroundSites={this.state.parkCampgroundSites}
            parkCampgrounds={this.state.parkCampgrounds}
                  />
            }} />

        <Route
          path="/parkGas" render={props => {
            return <h1>Park Gas map here</h1>
            // Remove null and return the component which will show the user's tasks
          }}
        />

        <Route
          path="/parkMarket" render={props => {
            return <h1>Park Market map here</h1>
            // Remove null and return the component which will show the user's tasks
          }}
        />

        <Route
          path="/parkWeather" render={props => {
            return <ParksWeatherPage {...props}
             parkName={this.state.parkName}
            parkWeather={this.state.parkWeather}
            />
            // Remove null and return the component which will show the user's tasks
          }}
        />

      </React.Fragment>
       );
    }
  }
