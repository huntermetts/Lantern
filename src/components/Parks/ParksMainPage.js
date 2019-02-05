import React, { Component } from "react"
import { Link, Redirect } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import NavBar from "../nav/NavBar";
import "./ParksMainPage.css"
import details from './details.png'
import amenities from './amenities.png'
import camping from "./camping.png"
import gas from "./gas.png"
import markets from "./markets.png"
import weather from "./weather.png"
import dividerLine from "./dividerLine.png"




export default class ParksMainPage extends Component {
    render() {

        let displayName = ""
        if (this.props.parkName === ""){
            displayName = `Sorry... Either the park name was spelled incorrectly or
             this park isn't in our database :(`
             return (
                <React.Fragment>
                <NavBar />
                <h1 className="parkName">{displayName}</h1>
              </React.Fragment>
            )
        } else {
            displayName = this.props.parkName
            return (
                <React.Fragment>
                <NavBar />
                <h1 className="parkName">{displayName}</h1>

                    <img src={dividerLine} className="mainPageDividerLine" alt="dividerLine"></img>

                <section className="iconContainer">
                <figure>
                    <img src={details} onClick={() => this.props.history.push('/')} className="detailsIcon" alt="detailsIcon" height="100" width="100"></img>
                    <figcaption className="parkCorrect">Park Features</figcaption>
                </figure>

                <figure>
                    <img src={amenities} onClick={() => this.props.history.push('/')}  className="amenitiesIcon" alt="amenitiesIcon" height="100" width="100"></img>
                    <figcaption className="amenCorrect">Amenities</figcaption>
                </figure>

                <figure>
                    <img src={camping} onClick={() => this.props.history.push('/')}  className="campingIcon" alt="campingIcon" height="100" width="100"></img>
                    <figcaption className="campingCorrect">Camping</figcaption>
                </figure>

                <figure >
                    <img src={gas} onClick={() => this.props.history.push('/')} className="gasIcon" alt="gasIcon" height="100" width="100"></img>
                    <figcaption className="gasCorrect">Gas Stations</figcaption>
                </figure>

                <figure >
                    <img src={markets} onClick={() => this.props.history.push('/')}  className="marketsIcon" alt="marketsIcon" height="100" width="100"></img>
                    <figcaption className="marketCorrect">Markets</figcaption>
                </figure>

                <figure >
                    <img src={weather} onClick={() => this.props.history.push('/')}  className="weatherIcon" alt="weatherIcon" height="100" width="100"></img>
                    <figcaption className="weatherCorrect">Weather</figcaption>
                </figure>
                </section>

                <section className="mainButtonHolder">
                <button type="submit" onClick={() => { this.props.history.push("/trips/new")}} className="btn btn-dark addToTrips" >Add To Trips</button>

                <button type="submit" className="btn btn-dark mapIt" >Map It</button>
                </section>





              </React.Fragment>
            )
        }
    }
}


