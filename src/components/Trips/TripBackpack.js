import React, { Component } from 'react'
import TripManager from "../../modules/TripsManager"
import "./TripForm.css"
import backArrow from './backArrow.png'
import add from "./add.png"
import TripsManager from '../../modules/TripsManager';
import x from "./x.png"

export default class TripBackpack extends Component{
  render() {

    const trip = this.props.trips.find(a => a.id === parseInt(this.props.match.params.tripId)) || {}

    return (
        <React.Fragment>
            <img src={backArrow} onClick={() => this.props.history.push("/trips")} className="tripsBackArrow" alt="backArrow"></img>

              {

                <div key={trip.id}>
                <div>
                    <h2 className="backpackTitle">
                        Your Backpack For: <br></br>
                        <strong>{trip.name}</strong>
                    </h2>
                </div>
                </div>

              }

            <div className="tripForm formContainer containerFixed">
            <img src={add} height="39" width="39" onClick={() => this.props.history.push("/trips")} className="backpackItemButton" alt="backpackItemButton"></img>

            <div className="itemsUp">
            {
                this.props.backpackItems.map(item =>
                    <div key={item.id}>
                    <div>
                        <img src={x} height="12" width="12" onClick={() => this.props.deleteItem(item.id, item.tripId)}
                        className="xButton" alt="xButton">
                        </img>

                        {item.name}
                        </div>
                    </div>
                )
            }
            </div>
            </div>
        </React.Fragment>
    )
}
}