const remoteURL = "http://localhost:5002"

export default {
    // "Put" for the edit
    put(itemId, existingTrip){
      return fetch(`${remoteURL}/backpackItems/${itemId}`,{
        method:'PUT',
        headers:{
          "Content-Type": "application/JSON"
        },
        body:JSON.stringify(existingTrip)

      })
    },
    // getting all trips:
    getAllItems(tripId) {
      let sessionUser = sessionStorage.getItem("userId")
      let sessionUserNumber = Number(sessionUser)
        return fetch(`${remoteURL}/backpackItems?userId=${sessionUserNumber}&tripId=${tripId}`)
        .then(e => e.json())
      },
    //   delete items
      removeAndList(id){
          return fetch(`http://localhost:5002/backpackItems/${id}`, {
              method: "DELETE"
          })
          .then(e => e.json())
  },
//   adding a new item
  post(newItem) {
    return fetch(`${remoteURL}/backpackItems`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newItem)
    }).then(data => data.json())
  },

  get(id){
    return fetch(`${remoteURL}/backpackItems/${id}`).then(res => res.json())
  }
}