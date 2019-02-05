import React, { Component } from 'react'
import TripManager from "../../modules/TripsManager"
import "./TripForm.css"
import backArrow from './backArrow.png'

export default class TaskEditForm extends Component{
  state={
    name: "",
    tripDate: "",
    userId: ""
  }

  handleFieldChange = evt => {
    const stateToChange = {}
    stateToChange[evt.target.id] = evt.target.value
    this.setState(stateToChange)
}
  componentDidMount(){
    TripManager.get(this.props.match.params.tripId).then(trips => {
      this.setState({
        name:trips.name,
        tripDate: trips.tripDate,
        userId: trips.userId
      })
    })
  }

  updateExistingTrip = evt => {
      evt.preventDefault()

      const existingTrip = {
        name:this.state.name ,
        tripDate: this.state.tripDate,
        userId: this.state.userId
      }
      this.props.updateTrip(this.props.match.params.tripId, existingTrip)
      .then(() => this.props.history.push("/trips"))
    }

  render() {
    return (
        <React.Fragment>
            <img src={backArrow} onClick={() => this.props.history.push("/trips")} className="tripsBackArrow" alt="backArrow"></img>

            <h2 className="goingUpdateHeader"><strong>Change your mind?</strong> <br></br> No problem.</h2>

                <h3 className="goingUpdate"><strong>Update</strong> your trip below.</h3>

            <form className="tripForm formContainer">
                <div className="form-group">
                    <label htmlFor="tripName">Where Are You Headed?</label>
                    <input type="text" required
                          className="form-control"
                          onChange={this.handleFieldChange}
                          id="name"
                          value={this.state.name}
                          />
                </div>
                <div className="form-group">
                    <label htmlFor="tripDate">When Are You Going?</label>
                    <input type="date" required
                          className="form-control"
                          onChange={this.handleFieldChange}
                          id="tripDate"
                          value={this.state.tripDate}
                          />
                </div>
                <button type="submit" onClick={this.updateExistingTrip} className="btn btn-dark updateTrip">Update</button>
            </form>
        </React.Fragment>
    )
}
}