import React, { Component } from 'react'
import "./ParksDescriptionPage.css"
import { Link } from "react-router-dom";
import backArrow from './backArrow.png'
import dividerLine from "./dividerLine.png"


// import AnimalCard from "./AnimalCard"

export default class ParksDescriptionPage extends Component {

    render () {

       this.props.getParkImg(this.props.parkLat, this.props.parkLong)
    //    console.log(this.props.parkImages)

        return (
            <React.Fragment>
            <section className="parkDescriptionContainer">
                 {/* ADD TRIP BUTTON */}
                 <section className="descriptionButton">

                     <img src={backArrow} onClick={() => this.props.history.push("/parksMainPage")} className="descriptionBackArrow" alt="backArrow"></img>
                </section>

                <h3 className="descriptionHeader"><strong>{this.props.parkName}</strong> Info:</h3>

                 <div className="centerThatThing">
                <img src={dividerLine} alt="dividerLine"></img>
                </div>

                <div className="centerDesc">
                <div className="description">
                <p>{this.props.parkDescription}</p>

                <section className="imagesContainter">
                {this.props.parkImages.slice(0, 4).map((image, i) => (
                    <div key={i}>
                    <img src={image} alt="parkPic" className="imgPosition" height="230" width="230"></img>
                    </div>
                ))}
                </section>

                </div>
                </div>
            </section>
            </React.Fragment>
        )
    }
}