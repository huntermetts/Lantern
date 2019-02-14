const remoteURL = "http://9544d2d5.ngrok.io"


// "http://localhost:5002"

export default {
    // "Put" for the edit
    put(tripId, existingTrip){
      return fetch(`${remoteURL}/trips/${tripId}`,{
        method:'PUT',
        headers:{
          "Content-Type": "application/JSON"
        },
        body:JSON.stringify(existingTrip)

      })
    },
    // getting all trips:
    getUserTrips() {
      let sessionUser = sessionStorage.getItem("userId")
      let sessionUserNumber = Number(sessionUser)
        return fetch(`${remoteURL}/trips?userId=${sessionUserNumber}`)
        .then(e => e.json())
      },
    //   delete trips
      removeAndList(id){
          return fetch(`${remoteURL}/trips/${id}`, {
              method: "DELETE"
          })
          .then(e => e.json())
          .then(() => fetch(`${remoteURL}/trips`))
          .then(e => e.json())
  },
//   adding a new trip
  post(newTrip) {
    return fetch(`${remoteURL}/trips`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newTrip)
    }).then(data => data.json())
  },

  get(id){
    return fetch(`${remoteURL}/trips/${id}`).then(res => res.json())
  }
}