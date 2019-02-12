import React, { Component } from 'react'
import BackpackManager from "../../modules/BackpackManager"
import "./TripForm.css"
import backArrow from './backArrow.png'
import x from './x.png'
import add from './add.png'

export default class TripBackpackEdit extends Component{
  state={
    name: "",
    tripId: "",
    userId: ""
  }


  handleFieldChange = evt => {
    const stateToChange = {}
    stateToChange[evt.target.id] = evt.target.value
    this.setState(stateToChange)
    console.log(stateToChange)
}

// backpackItemTest = () => {
//     this.props.get(this.props.match.params.backpackId)
//     .then(item => console.log(item.name)

//     )
// }

  componentDidMount(){
    BackpackManager.get(this.props.match.params.tripId).then(items =>
    { console.log(items)
      this.setState({
        name:items.name,
        tripId: items.tripdId,
        userId: items.userId
      })
    })
  }

  updateExistingItem = evt => {
    const trip = this.props.trips.find(a => a.id === parseInt(this.props.match.params.tripId)) || {}
      evt.preventDefault()

      const existingItem = {
        name:this.state.name ,
        tripId: this.props.match.params.tripId,
        userId: Number(sessionStorage.getItem("userId"))
      }
      console.log(existingItem)
      console.log(this.props.match.params.backpackId)
      this.props.updateBackpack(this.props.match.params.backpackId, existingItem)

      .then(() => this.props.history.push(`/trips/${trip.id}/backpack`))
    }

  render() {
    console.log("tripId",this.props.match.params.tripId)
    console.log("backpackId",this.props.match.params.backpackId)
    console.log("PROPS",this.props)

    const trip = this.props.trips.find(a => a.id === parseInt(this.props.match.params.tripId)) || {}

    // this.backpackItemTest()

    return (
        <React.Fragment>
            <img src={backArrow} onClick={() => this.props.history.push(`/trips/${trip.id}/backpack`)} className="tripsBackArrow" alt="backArrow"></img>

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

<section className="backpackItemsMiddle">
<div className="EditOutsideBox">
<div className="tripForm formContainer containerFixed">

<div className="itemsUp">
{

//   this.props.backpackItems.map(item =>
    //   <div key={item.id}>
      <div>
      <input className="form-control form-control-sm editFormBackpack mb-3 mt-4" id="name" value={this.state.name} onChange={this.handleFieldChange} >
          {/* <input className="form-control form-control-sm editFormBackpack mb-3 mt-4" placeholder={item.name}> */}
          </input>
          </div>
    //   </div>
//   )
}

</div>
</div>
<button onClick={this.updateExistingItem} className="updateBackpack btn btn-dark">Update</button>
{/* <button type="button"
          className="btn btn-dark editTrip editPack"
          onClick={() => this.props.history.push(`/trips/${trip.id}/backpack/${this.props.backpackItems.id}/edit`)}>
          Edit
  </button> */}
</div>
</section>

        </React.Fragment>
    )
}
}