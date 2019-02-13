export default {
    parkNameCall(parkName) {
      return fetch(`https://developer.nps.gov/api/v1/parks?q=${parkName}&api_key=NWLxY3Q6zeINHJ3vzWkztpym2fz26w1svwLA07dg`).then(e => e.json());
    },

    parkCampAndAminCall(parkName){
        return fetch(`https://developer.nps.gov/api/v1/campgrounds?q=${parkName}&api_key=NWLxY3Q6zeINHJ3vzWkztpym2fz26w1svwLA07dg`).then(e => e.json());
    },

    parkImgCall(lat, long) {
      return fetch(`https://www.hikingproject.com/data/get-trails?lat=${lat}&lon=${long}&maxDistance=10&key=200419234-5c99977becdeea30bf6d65bea28e28e9`)
    .then(resp => resp.json())

    }
  }