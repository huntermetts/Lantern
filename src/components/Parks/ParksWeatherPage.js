import React, { Component } from 'react'
import "./ParksDescriptionPage.css"
import { Link } from "react-router-dom";
import backArrow from './backArrow.png'
import dividerLine from "./dividerLine.png"

// import AnimalCard from "./AnimalCard"

export default class ParksWeatherPage extends Component {

    render () {
        return (
            <React.Fragment>
            <section className="parkDescriptionContainer">

                 {/* ADD TRIP BUTTON */}
                 <section className="descriptionButton">
                     <img src={backArrow} onClick={() => this.props.history.push("/parksMainPage")} className="descriptionBackArrow" alt="backArrow"></img>
                </section>

                <h3 className="descriptionHeader"><strong>{this.props.parkName}</strong> Weather:</h3>
                    <div className="centerThatThing">
                        <img src={dividerLine} alt="dividerLine"></img>
                    </div>
                <p className="description">{this.props.parkWeather}</p>
            </section>
            </React.Fragment>
        )
    }
}