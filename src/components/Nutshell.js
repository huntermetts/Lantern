import React, { Component } from "react";
import NavBar from "./nav/NavBar";
import ApplicationViews from "./ApplicationViews";
import "./Nutshell.css";


class Nutshell extends Component {
  render() {
    return (
      <React.Fragment>
        <ApplicationViews/>
      </React.Fragment>
    );
  }
}

export default Nutshell;
