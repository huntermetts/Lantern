import React, { Component } from 'react'
import trash from "./trash-can.png"
import "./Tripspage.css"
import { Link } from "react-router-dom";
import NavBar from "../nav/NavBar";
import add from "./add.png"
// import AnimalCard from "./AnimalCard"

export default class Tripspage extends Component {

    render () {
        return (
            <React.Fragment>
            <NavBar />
            <section className="trips">

                 {/* ADD TRIP BUTTON */}
                 <section className="tripButton" onClick={() => { this.props.history.push("/trips/new")}}>
            <img src={add} className="addTripButton" alt="addIcon" height="35" width="35"></img>
            </section>


                <h2><strong>Your Trips:</strong></h2>
                {
                    // GETTING ALL TRIPS CURRENTLY IN JSON
                this.props.trips.map(trip =>

                <div key={trip.id}>
                        <div className="card-body">

                         {/* ADDING DELETE TO THE TASK PAGE */}
                         <div className="deleteTrip" onClick={() => this.props.deleteTrip(trip.id)}>
                            <img src={trash} className="trashIcon" alt="trashIcon" height="30" width="30"></img>
                        </div>


                            <h5 className="card-title">
                                <strong>Location:</strong> <br></br>
                                {trip.name}<br></br> <br></br>
                                <strong>Date:</strong> <br></br>
                                {trip.tripDate}
                            </h5>


                            {/* ADD LINK FOR EDITCHECK GITHUB */}
                            <button type="button"
                                className="btn btn-dark editTrip"
                                onClick={() => this.props.history.push(`/trips/${trip.id}/edit`)}>Edit</button>

                             {/* <Link className="nav-link editTrip" to={`/trips/${trip.id}/edit`}>Edit</Link> */}



                        </div>
                        {/* <hr></hr> */}
                    </div>
                )}



            {/* onClick={() => {
                        this.props.history.push("/trips/new")}
                    } */}


            </section>
            </React.Fragment>
        )
    }
}