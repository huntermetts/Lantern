import React, { Component } from 'react'
import "./ParksCampingPage.css"
import { Link } from "react-router-dom";
import backArrow from './backArrow.png'
import Iframe from 'react-iframe'
// import {Map} from "google-maps-react"
// import dividerLine from "./dividerLine.png"



export default class ParksMapIt extends Component {

    render () {
        return (
            <React.Fragment>
            <section className="mapItPage">
            <img src={backArrow} onClick={() => this.props.history.push("/parksMainPage")} className="mapBackArrow" alt="backArrow"></img>
            <h3 className="descriptionHeader"><strong>{this.props.parkName}</strong></h3>
            <div className="iFrameContainer">
                <Iframe url={"https://www.google.com/maps/embed/v1/place?key=AIzaSyCTp8L1A1OmsgiOt-otbK--6rAl_hezCNo&q=" + this.props.parkName + "&zoom=9&maptype=roadmap"}
                    width="330px"
                    height="500px"
                    id="map"
                    className="iFrameMap"
                    display="initial"
                    position="relative"
                    mapTypeId="terrain"
                    allowFullScreen
                />
            </div>
            </section>
            </React.Fragment>
        )
    }
}