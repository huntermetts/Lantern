export default {
    parkNameCall(parkName) {
      return fetch(`https://developer.nps.gov/api/v1/parks?q=${parkName}&api_key=NWLxY3Q6zeINHJ3vzWkztpym2fz26w1svwLA07dg`).then(e => e.json());
    },

    parkCampAndAminCall(parkName){
        return fetch(`https://developer.nps.gov/api/v1/campgrounds?q=${parkName}&api_key=NWLxY3Q6zeINHJ3vzWkztpym2fz26w1svwLA07dg`).then(e => e.json());
    }
  }