import React, { Component } from "react"
import "./TripForm.css"
import backArrow from './backArrow.png'

export default class TripForm extends Component {
    // Set initial state
    state = {
        name: "",
        tripDate: "",
        userId: ""
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
    constructNewTrip = evt => {
        let sessionUser = sessionStorage.getItem("userId");
        evt.preventDefault()
            const trip = {
                name: this.state.name,
                tripDate: this.state.tripDate,
                userId: Number(sessionUser)
            }

            this.props.addTrip(trip).then(() => this.props.history.push("/trips"))

    }

    backToSearch = () => {
        this.props.resetSearch()
        this.props.history.push("/")
    }

    render() {
        return (
            <React.Fragment>
                <img src={backArrow} onClick={() => this.backToSearch()} className="tripsBackArrow" alt="backArrow"></img>

                <h2 className="going"><strong>Going Somewhere?</strong></h2>
                <form className="tripForm formContainer">
                    <div className="form-group">
                        <label htmlFor="tripName">Where Are You Headed?</label>
                        <input type="text" required
                               className="form-control"
                            //    value={this.props.parkName}
                               onChange={this.handleFieldChange}
                               id="name"
                               placeholder="Denali National Park"

                               >
                        </input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="dueDate">When Are You Going?</label>
                        <input type="date" required
                               className="form-control"
                               onChange={this.handleFieldChange}
                               id="tripDate" placeholder="Date" />
                    </div>
                    <button type="submit" onClick={this.constructNewTrip} className="btn btn-dark addNewTrip">Add Trip</button>
                </form>
            </React.Fragment>
        )
    }
}