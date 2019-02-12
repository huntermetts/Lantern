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
    }


    constructNewUser = () => {

        let userNameCheck = this.props.users.find(user =>
            user.username === this.state.username
            )

        if (userNameCheck === undefined){
            const user = {
                username: this.state.username.toUpperCase(),
                password: this.state.password,
                id: this.state.id
            }

            this.props.addUser(user).then(response => {
                console.log(response)
                this.props.updateComponent()
                this.props.history.push("/login")
            })
        } else {
            alert("This username is already being used... Please enter a unique username")
            this.props.history.push("/register")
        }

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

                     <p className="appDescRegister">Sign up to explore all 58 of America's National Parks.</p>

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
                            maxlength="18"
                            placeholder="Enter a username"
                            required autoFocus="" />
                            <br></br>
                        <label htmlFor="inputPassword">
                        </label>
                        <br></br>
                        <input onChange={this.handleFieldChange} type="password"
                            id="password"
                            placeholder="Enter a password"
                            maxlength="18"
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