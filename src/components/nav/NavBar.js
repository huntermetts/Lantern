import React, { Component } from "react"
import { Link, Redirect } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import "./NavBar.css"
import home from'./NavAssests/home.png';




class NavBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-light flex-md-nowrap pb-0 shadow footer">
                <ul className="nav nav-pills nav-fill ulContainer">
                {/* Inserting the icon for the navigation at the footer of the application */}
                <li>
                <Link className="nav-link" to="/"> <img src={home} className="homeIcon nav-item"  alt="homeIcon" height="24" width="24">
                </img></Link>
                </li>

                {/* <Link className="nav-link" to="/"> </Link> */}

                </ul>
            </nav>
        )
    }
}

export default NavBar
