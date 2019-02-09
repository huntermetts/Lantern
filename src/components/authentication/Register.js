import React, { Component } from "react"
import "./Login.css"
// import { Link } from "react-router-dom"
// import LoginManager from '../../modules/LoginManager'
import dividerLine from'./dividerLine.png';
import inputBox from'./inputBox.png';
import backArrow from './backArrow.png'




export default class Register extends Component {

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
    handleRegister = (e) => {
        e.preventDefault()

        /*
            For now, just store the email and password that
            the customer enters into local storage.
        */
        // sessionStorage.setItem(
        //     "credentials",
        //     JSON.stringify({
        //         username: this.state.username,
        //         password: this.state.password,
        //         id: this.state.id
        //     })
        // )
    }


    constructNewUser = () => {
            const user = {
                username: this.state.username,
                password: this.state.password,
                id: this.state.id
            }

            this.props.addUser(user).then(response => {
                console.log(response)
                this.props.updateComponent()
                this.props.history.push("/login")
                // window.location.reload();
            })
    }

    render() {
        return (
            <section className="register">
            <img src={backArrow} onClick={() => this.props.history.push("/login")} className="registerBackArrow" alt="backArrow"></img>
                <form className="registerContainer"onSubmit={this.handleRegister}>

                <div>
                    <h2>Sign up for</h2>
                    <h1><strong>L A N T E R N</strong></h1>
                    <img src={dividerLine} className="loginDividerLine" alt="dividerLine"></img>

                     <section className="everythingButTheHeader">
                    <img src={inputBox} className="registerInputBox" alt="inputBox"></img>
                    </section>
                    <label htmlFor="inputUsername">
                    </label><br></br>
                </div>

                    <div className="moveInputLinesRegister">
                        <section className="moveInputLines">
                        <input onChange={this.handleFieldChange} type="text"
                            id="username"
                            placeholder="Enter a username"
                            required autoFocus="" />
                            <br></br>
                        <label htmlFor="inputPassword">
                        </label>
                        <br></br>
                        <input onChange={this.handleFieldChange} type="password"
                            id="password"
                            placeholder="Enter a password"
                            required />
                            <br></br>
                            </section>
                        </div>
                    <button type="submit" onClick={() => this.constructNewUser()} className="btn btn-dark    signIn">
                        Sign Up
                    </button>
                </form>

            </section>
        )
    }
}