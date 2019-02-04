import React, { Component } from "react"
import { Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import NavBar from "../nav/NavBar";
import inputBox from'./inputBox.png';
import "./Searchpage.css"




class Searchpage extends Component {
    render() {
        let name = sessionStorage.getItem('username');
        return (
            <React.Fragment>
            <NavBar />
            <section className="searchAPI">
                <form className="searchContainer" onSubmit={this.handleLogin}>
                                   <h2>Welcome,</h2>
                         <h1><strong>{name.toUpperCase()}</strong></h1>
                    <label htmlFor="inputUsername">
                    </label> <br></br>

                    <section className="everythingButTheHeader">
                    <img src={inputBox} className="inputBox" alt="inputBox"></img>
                    </section>


                    <section className="moveInputLines">
                        <input onChange={this.handleFieldChange} type="text"
                            id="searchParkName"
                            placeholder="Search & Explore"
                            required autoFocus="" />
                            <br></br>
                        </section>
                    <button type="submit" className="btn btn-dark searchParkButton" >Let's Go</button>

                    <p className="or">OR</p>

                     <button type="submit" className="btn btn-dark viewTripsButton" >View Your Saved Trips</button>
                </form>
            </section>
          </React.Fragment>
        )
    }
}

export default Searchpage
