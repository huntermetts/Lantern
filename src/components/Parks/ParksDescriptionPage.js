import React, { Component } from 'react'
import "./ParksDescriptionPage.css"
import { Link } from "react-router-dom";
import backArrow from './backArrow.png'
import dividerLine from "./dividerLine.png"

// import AnimalCard from "./AnimalCard"

export default class ParksDescriptionPage extends Component {

    render () {
        return (
            <React.Fragment>
            <section className="parkDescriptionContainer">

                 {/* ADD TRIP BUTTON */}
                 <section className="descriptionButton">
                     <img src={backArrow} onClick={() => this.props.history.push("/parksMainPage")} className="descriptionBackArrow" alt="backArrow"></img>
                </section>

                <h3 className="descriptionHeader"><strong>{this.props.parkName}</strong> Info:</h3>
                <img src={dividerLine} className="descDividerLineBottom" alt="dividerLine"></img>
                <p className="description">{this.props.parkDescription}</p>
            </section>
            </React.Fragment>
        )
    }
}