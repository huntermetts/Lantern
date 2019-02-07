import React, { Component } from 'react'
import "./ParksCampingPage.css"
import { Link } from "react-router-dom";
import backArrow from './backArrow.png'
import Iframe from 'react-iframe'
// import {Map} from "google-maps-react"
// import dividerLine from "./dividerLine.png"



export default class ParksMarket extends Component {

    render () {
        return (
            <React.Fragment>
            <section className="mapItPage">
            <img src={backArrow} onClick={() => this.props.history.push("/parksMainPage")} className="mapBackArrow" alt="backArrow"></img>
            <h3 className="descriptionHeader">Markets Near <br></br> <strong>{this.props.parkName}</strong></h3>
            <div className="iFrameContainer">
                    <Iframe url={`https://www.google.com/maps/embed/v1/search?q=${this.props.parkName}grocery%20store&key=AIzaSyCTp8L1A1OmsgiOt-otbK--6rAl_hezCNo&zoom=9`}
                            width="330px"
                            height="480px"
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