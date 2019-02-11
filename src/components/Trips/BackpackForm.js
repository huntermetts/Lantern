import React, { Component } from "react"
import "./TripForm.css"
import backArrow from './backArrow.png'

export default class BackpackForm extends Component {
    // Set initial state



    state = {
        name: "",
        userId: "",
        tripId: "",
    }

    // Update state whenever an input field is edited
    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    /*
        Local method for validation, creating animal object, and
        invoking the function reference passed from parent component
     */
    constructNewItem = evt => {
        let sessionUser = sessionStorage.getItem("userId");
        evt.preventDefault()
            const item = {
                name: this.state.name,
                userId: Number(sessionUser),
                tripId: Number(this.props.match.params.tripId)
            }

            this.props.addItem(item, Number(this.props.match.params.tripId))
            .then(() => this.props.history.push(`/trips/${this.props.match.params.tripId}/backpack`))
    }

    backToSearch = () => {
        this.props.resetSearch()
        this.props.history.push("/")
    }

    backToTrips = () => {
        const trip = this.props.trips.find(a => a.id === parseInt(this.props.match.params.tripId)) || {}
        this.props.history.push(`/trips/${trip.id}/backpack`)
    }

    render() {

        return (
            <React.Fragment>
                <h2 className="going"><strong>Add an item below</strong></h2>
                <form className="tripForm formContainer">
                    <div className="form-group">
                        <label htmlFor="tripName">What do you want to add?</label>
                        <input type="text" required
                               className="form-control"
                            //    value={this.props.parkName}
                               onChange={this.handleFieldChange}
                               id="name"
                               placeholder="Firewood, Marshmellows, etc"

                               >
                        </input>
                    </div>
                    <button type="submit" onClick={this.constructNewItem} className="btn btn-dark addNewTrip">Add Item</button>
                    <button type="submit" onClick={this.backToTrips} className="btn btn-dark cancelTrip">Cancel</button>
                </form>
            </React.Fragment>
        )
    }
}