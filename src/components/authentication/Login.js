import React, { Component } from "react"
import "./Login.css"
import { Link } from "react-router-dom"
import dividerLine from'./dividerLine.png';
import inputBox from'./inputBox.png';



export default class Login extends Component {
    // Set initial state
    state = {
        username: "",
        password: ""
    }

    // Update state whenever an input field is edited
    handleFieldChange = (evt) => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    // Simplistic handler for login submit
    handleLogin = (e) => {
        e.preventDefault()
    //    Setting username in session storage. Grabbing the username from session storage and searching through "users" in the datatbase. The .find attempts to find a username that matches the username in session storage. If able to find a match, log in under that user. If not, display message that username not found.
        sessionStorage.setItem(
            "username",
            this.state.username,
            // "password",
            // this.state.password
            )

        let currentUser = sessionStorage.getItem("username")
        // let currentUserPassword = sessionStorage.getItem("password")
        let authenticated = this.props.users.find(user =>
            user.username === currentUser
            // && user.password === currentUserPassword
            )


            if (authenticated === undefined){
                alert("Whoops! We we couldn't find your account. Please re-renter a valid username and email or sign up below!")
                window.location.reload()
                // this.props.history.push("/register")
            } else {
            console.log(authenticated.id)

            sessionStorage.setItem(
                "userId",
                authenticated.id)
                // UPDATING THE COMPONENT WITHOUT REFRESHING THE PAGE
                this.props.updateComponent()
                // Taking user to news page
                this.props.history.push("/")
            }
    }

    render() {

        return (
            <section className="login">
                <form className="registerContainer" onSubmit={this.handleLogin}>                    <h2>Welcome to</h2>
                         <h1><strong>L A N T E R N</strong></h1>
                         <img src={dividerLine} className="loginDividerLine" alt="dividerLine"></img>
                    <label htmlFor="inputUsername">
                    </label> <br></br>

                    <section className="everythingButTheHeader">
                    <img src={inputBox} className="inputBox" alt="inputBox"></img>
                    </section>


                    <section className="moveInputLines">
                        <input onChange={this.handleFieldChange} type="text"
                            id="username"
                            placeholder="Username"
                            required autoFocus="" />
                            <br></br>
                        <label htmlFor="inputEmail">
                        </label>
                        <br></br>
                        <input onChange={this.handleFieldChange} type="password"
                            id="password"
                            placeholder="Password"
                            required />
                            <br></br>
                        </section>

                    {/* <button type="submit" className="btn btn-primary signIn">
                        Sign in
                    </button> */}
                    <div className="centerThatThing">
                    <button type="submit" className="btn btn-dark signIn">Log In</button>
                    </div>

                    <button className="btn btn-dark signUp"><Link className="linkText" to="/register">Sign Up</Link></button>

                </form>

            </section>
        )
    }


    // onClick={() => this.props.history.push("/news")}
}