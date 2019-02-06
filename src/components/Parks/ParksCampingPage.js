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
            <section className="parkDescriptionContainer">

                 {/* ADD TRIP BUTTON */}
                 <section className="descriptionButton">
                     <img src={backArrow} onClick={() => this.props.history.push("/parksMainPage")} className="descriptionBackArrow" alt="backArrow"></img>
                </section>

                <h3 className="descriptionHeader"><strong>Campsite Names with Site
                Availability</strong></h3>

                 <img src={dividerLine} className="campingDividerLineTop" alt="dividerLine"></img>


                <div className="campDescription">
                {this.props.parkCampgrounds.map(campground => (
                    <div>
                        <h4><strong>{campground.name}:</strong><br></br></h4>
                        <p className="siteBottom">{campground.campsites.totalSites} sites available</p>
                        <img src={dividerLine} className="campingDividerLineBottom" alt="dividerLine"></img>
                    </div>
                ))}
                </div>
                {/* {this.props.parkCampgroundSites} */}
            </section>
            </React.Fragment>
        )
    }
}