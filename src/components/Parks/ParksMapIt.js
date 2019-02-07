import React, { Component } from 'react'
import "./ParksCampingPage.css"
import { Link } from "react-router-dom";
import backArrow from './backArrow.png'
import Iframe from 'react-iframe'
// import dividerLine from "./dividerLine.png"



export default class ParksMapIt extends Component {

    render () {
        return (
            <React.Fragment>
            <section className="mapItPage">
            <img src={backArrow} onClick={() => this.props.history.push("/parksMainPage")} className="mapBackArrow" alt="backArrow"></img>
            <h3 className="descriptionHeader"><strong>{this.props.parkName}</strong></h3>
            <div className="iFrameContainer">
            <Iframe url="http://www.youtube.com/embed/xDMP3i36naA"
                width="350px"
                height="500px"
                id="map"
                className="iFrameMap"
                display="initial"
                position="relative"
                allowFullScreen
            />
            </div>
            </section>
            </React.Fragment>
        )
    }
}