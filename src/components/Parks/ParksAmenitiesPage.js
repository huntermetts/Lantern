import React, { Component } from 'react'
import "./ParksCampingPage.css"
import { Link } from "react-router-dom";
import backArrow from './backArrow.png'
import dividerLine from "./dividerLine.png"

// import AnimalCard from "./AnimalCard"

export default class ParksAmenitiesPage extends Component {

    render () {
        let cellService = this.props.parkCampgrounds.map(campsite => (
            console.log(campsite.amenities.cellPhoneReception)
        ))

        if (cellService){
            cellService = "None"
        } else {
            console.log("cellService is wrong")
        }


       let water;
        this.props.parkCampgrounds.forEach(campsiteWater => {
            let runningWaterArray = campsiteWater.amenities.potableWater
            console.log("Array:", runningWaterArray)

            if (runningWaterArray.length===0){
                water = "None"
            } else {
                // console.log(runningWaterArray)
                water = "Yes - year round"
            }
        })


        let firewood;
        this.props.parkCampgrounds.forEach(campsiteFirewood => {
            let firewoodArray = campsiteFirewood.amenities.firewoodForSale
            console.log(firewoodArray)

            if (firewoodArray.length < 1){
                firewood = "None"
            } else {
                // console.log(runningWaterArray)
                firewood = "Yes - year round"
            }
        })

        let trash;
        this.props.parkCampgrounds.forEach(campsiteTrash => {
            let trashArray = campsiteTrash.amenities.trashRecyclingCollection
            console.log(trashArray)

            if (trashArray.length < 1){
                trash = "None"
            } else {
                // console.log(runningWaterArray)
                trash = "Yes - year round"
            }
        })


        // console.log(runningWater);






        return (
            <React.Fragment>
            <section className="parkDescriptionContainer">

                 {/* ADD TRIP BUTTON */}
                 <section className="descriptionButton">
                     <img src={backArrow} onClick={() => this.props.history.push("/parksMainPage")} className="descriptionBackArrow" alt="backArrow"></img>
                </section>

                <h3 className="descriptionHeader"><strong>{this.props.parkName}</strong> Campground
                Amenities</h3>

                 <img src={dividerLine} className="campingDividerLineTop" alt="dividerLine"></img>


                <div className="campDescription">
                {this.props.parkCampgrounds.map(campground => (
                    <div>
                        <h4><strong>{campground.name}:</strong><br></br></h4>

                        <div className="allAmen">
                        <p className="parkAmen"><strong>Running Water: </strong>{water}</p>

                        <p className="parkAmen"><strong>Toilets: </strong>{campground.amenities.toilets[0]}</p>

                         <p className="parkAmen"><strong>Showers: </strong>{campground.amenities.showers[0]}</p>

                        <p className="parkAmen"><strong>Phone Reception: </strong>{cellService}</p>

                        <p className="parkAmen"><strong>Firewood for sale: </strong>{firewood}</p>

                        <p className="siteBottom"><strong>Trash Collection: </strong>{trash}</p>
                        </div>

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