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
import backArrow from './backArrow.png'
import look from './look.svg'




export default class ParksMainPage extends Component {

    backToSearch = () => {
        this.props.resetSearch()
        this.props.history.push("/")
    }

    render() {

        let displayName = ""
        if (this.props.parkName === ""){
            displayName = `Oh no... we couldn't find that park :(`
             return (
                <React.Fragment>
                <img src={backArrow} className="backToSearchButton" alt="back" onClick={() => this.backToSearch()}></img>
                <h3 className="parkNameNotFound">{displayName}</h3>
                <div className="centerThatPic">
                <img src={look} className="l404" alt="look" height="296" width="393"></img>
                </div>
              </React.Fragment>
            )
        } else {
            displayName = this.props.parkName
            return (
                <React.Fragment>

                <img src={backArrow} className="backToSearchButton" alt="back" onClick={() => this.backToSearch()}></img>


                <h1 className="parkName">{displayName}</h1>
                    <div className="centerThatThing">
                    <img src={dividerLine} className="mainPageDividerLine" alt="dividerLine"></img>
                    </div>

                <section className="iconContainer">
                    <figure className="descCont">
                        <img src={details} onClick={() => this.props.history.push("/parkDescription")} className="detailsIcon" alt="detailsIcon" height="100" width="100"></img>
                        <figcaption className="parkCorrect">Park Info</figcaption>
                    </figure>

                    <figure className="amenCont">
                        <img src={amenities} onClick={() => this.props.history.push('/parkAmenities')}  className="amenitiesIcon" alt="amenitiesIcon" height="100" width="100"></img>
                        <figcaption className="amenCorrect">Amenities</figcaption>
                    </figure>

                    <figure className="campingCont">
                        <img src={camping} onClick={() => this.props.history.push('/parkCamping')}  className="campingIcon" alt="campingIcon" height="100" width="100"></img>
                        <figcaption className="campingCorrect">Camping</figcaption>
                    </figure>

                    <figure className="gasCont">
                        <img src={gas} onClick={() => this.props.history.push('/parkGas')} className="gasIcon" alt="gasIcon" height="100" width="100"></img>
                        <figcaption className="gasCorrect">Gas Stations</figcaption>
                    </figure>

                    <figure className="marketsCont" >
                        <img src={markets} onClick={() => this.props.history.push('/parkMarket')}  className="marketsIcon" alt="marketsIcon" height="100" width="100"></img>
                        <figcaption className="marketCorrect">Markets</figcaption>
                    </figure>

                    <figure className="weatherCont">
                        <img src={weather} onClick={() => this.props.history.push('/parkWeather')}  className="weatherIcon" alt="weatherIcon" height="100" width="100"></img>
                        <figcaption className="weatherCorrect">Weather</figcaption>
                    </figure>
                </section>


                <section className="mainButtonHolder">
                <button type="submit" onClick={() => { this.props.history.push("/trips/newWithName")}} className="btn btn-dark addToTrips" >Add To Trips</button>

                <button type="submit" className="btn btn-dark mapIt" onClick={() => { this.props.history.push("/parkMapIt")}} >Map It</button>
                </section>
              </React.Fragment>
            )
        }
    }
}


