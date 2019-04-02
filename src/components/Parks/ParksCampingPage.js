import React, { Component } from 'react'
import "./ParksCampingPage.css"
import { Link } from "react-router-dom";
import backArrow from './backArrow.png'
import dividerLine from "./dividerLine.png"

// import AnimalCard from "./AnimalCard"

export default class ParksCampingPage extends Component {

    render () {
        return (
            <React.Fragment>

                 {/* ADD TRIP BUTTON */}
                 <section className="descriptionButton">
                     <img src={backArrow} onClick={() => this.props.history.push("/parksMainPage")} className="descriptionBackArrow" alt="backArrow"></img>
                </section>

                <section className="parkCampingContainer">
                <h3 className="descriptionHeader"><strong>{this.props.parkName}</strong> Campground
                Availability</h3>

                <div className="centerThatThing">
                    <img src={dividerLine}alt="dividerLine"></img>
                </div>


                <section className="campAmenCenter">
                <div className="campDescription">
                {this.props.parkCampgrounds.map(campground => (
                    <div key={campground.id}>
                    <div>
                        <h4><strong>{campground.name}:</strong><br></br></h4>
                        <p className="siteBottom">{campground.campsites.totalsites} sites available</p>
                        <img src={dividerLine} alt="dividerLine"></img>
                    </div>
                    </div>
                ))}
                </div>
                </section>
                {/* {this.props.parkCampgroundSites} */}
            </section>
            </React.Fragment>
        )
    }
}