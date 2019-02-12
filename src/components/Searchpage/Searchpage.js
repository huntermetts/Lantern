import React, { Component } from "react"
import { Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import NavBar from "../nav/NavBar";
import inputBox from'./inputBox.png';
import "./Searchpage.css"
import dividerLine from'./dividerLine.png';

class Searchpage extends Component {

    state = {
        searchParkName: ""
    }

    handleFieldChange = (evt) => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    clearSession = () => {
        sessionStorage.clear();
        this.props.history.push("./login")
    }


    render() {
        let name = sessionStorage.getItem('username');
        return (
            <React.Fragment>

            <section className="searchAPI">
                <form className="searchContainer" onSubmit={this.handleLogin}>
                                   <h2>Welcome,</h2>
                         <h1><strong>{name.toUpperCase() + "."}</strong></h1>
                    <label htmlFor="inputUsername">
                    </label> <br></br>

                    <img src={dividerLine} className="searchDividerLine" alt="dividerLine"></img>



                    <section className="everythingButTheHeader">
                    <div className="logoutLink" onClick={this.clearSession} to="/login">Logout</div>
                    <img src={inputBox} className="inputBox" alt="inputBox"></img>
                    </section>


                    <form className="moveInputLines" >
                        <input onChange={this.handleFieldChange} type="text"
                            id="searchParkName"
                            required
                            placeholder="Search & Explore"
                             autoFocus="" />
                            <br></br>
                    </form>
                    <button type="submit" onClick={(event) =>{
                        event.preventDefault()
                        this.props.getParkName(this.state.searchParkName)
                        this.props.getParkCampsitesAndAminities(this.state.searchParkName)
                        .then(()=> {
                            this.props.history.push("/parksMainPage")
                        } )
                        }} className="btn btn-dark searchParkButton" >Let's Go</button>

                    <p className="or">OR</p>

                     <button type="submit" onClick={() => this.props.history.push("/trips")} className="btn btn-dark viewTripsButton" >View Your Saved Trips</button>
                </form>
            </section>
          </React.Fragment>
        )
    }
}

export default Searchpage
