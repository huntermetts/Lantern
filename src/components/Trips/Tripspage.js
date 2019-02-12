import React, { Component } from 'react'
import trash from "./trash-can.png"
import "./Tripspage.css"
import { Link } from "react-router-dom";
import NavBar from "../nav/NavBar";
import add from "./add.png"
import backArrow from './backArrow.png'
import pack from './pack.png'
// import AnimalCard from "./AnimalCard"

export default class Tripspage extends Component {

    render () {
        return (
            <React.Fragment>
            <img src={backArrow} className="backToSearchButton" onClick={() => this.props.history.push("/")}></img>
            <section className="trips">

                 {/* ADD TRIP BUTTON */}
                 <section className="tripButton" onClick={() => { this.props.history.push("/trips/new")}}>
            <img src={add} className="addTripButton" alt="addIcon" height="39" width="39"></img>
            </section>


                <h2><strong>Your Trips:</strong></h2>
                {
                    // GETTING ALL TRIPS CURRENTLY IN JSON
                this.props.trips.map(trip =>

                <div key={trip.id}>
                        <div className="card-body">

                         {/* ADDING DELETE TO THE TRIP PAGE */}
                         <div className="deleteTrip" onClick={() => this.props.deleteTrip(trip.id)}>
                            <img src={trash} className="trashIcon" alt="trashIcon" height="30" width="30"></img>
                        </div>


                            <h5 className="card-title">
                                <strong>Location:</strong> <br></br>
                                {trip.name}<br></br> <br></br>
                                <strong>Date:</strong> <br></br>
                                {trip.tripDate}
                            </h5>

                        <div className="tripBackpack">
                            <img src={pack} className="packIcon" onClick={(event) =>{
                        event.preventDefault()
                        this.props.getTripItems(trip.id)
                        .then(()=> {
                            this.props.history.push(`/trips/${trip.id}/backpack`)
                        } )
                        }} alt="packIcon" height="30" width="30"></img>
                        </div>

                            {/* ADD LINK FOR EDITCHECK GITHUB */}
                            <div className="centerButton">
                                <button type="button"
                                    className="btn btn-dark editTrip"
                                    onClick={() => this.props.history.push(`/trips/${trip.id}/edit`)}>Edit</button>
                            </div>
                             {/* <Link className="nav-link editTrip" to={`/trips/${trip.id}/edit`}>Edit</Link> */}



                        </div>
                        {/* <hr></hr> */}
                    </div>
                )}
            </section>
            </React.Fragment>
        )
    }
}