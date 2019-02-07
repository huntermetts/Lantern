import React, { Component } from 'react'
import "./ParksCampingPage.css"
import { Link } from "react-router-dom";
import backArrow from './backArrow.png'
// import dividerLine from "./dividerLine.png"



export default class ParksMapIt extends Component {

    render () {
        return (
            <React.Fragment>
            <section className="mapItPage">
            <img src={backArrow} onClick={() => this.props.history.push("/parksMainPage")} className="mapBackArrow" alt="backArrow"></img>
            <h3 className="descriptionHeader"><strong>{this.props.parkName}</strong></h3>
            </section>
            </React.Fragment>
        )
    }
}