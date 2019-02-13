import React, { Component } from "react"
import "./Login.css"
import { Link } from "react-router-dom"
import dividerLine from'./dividerLine.png';
import inputBox from'./inputBox.png';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';



export default class Login extends Component {
    // Set initial state
    constructor(props) {
        super(props);
    this.state = {
        username: "",
        password: "",
        modal: false
    }

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState(prevState => ({
          modal: !prevState.modal
        }));
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
            this.state.username.toUpperCase()
            )
        sessionStorage.setItem(
            "password",
            this.state.password
        )


        console.log(sessionStorage.getItem("username"))
        console.log(sessionStorage.getItem("password"))

        let currentUser = sessionStorage.getItem("username")
        let currentUserPassword = sessionStorage.getItem("password")
        let authenticated = this.props.users.find(user =>
            user.username === currentUser && user.password === currentUserPassword
            )


            if (authenticated === undefined){
                alert("Whoops! We we couldn't find your account. Please re-renter a valid username and password or sign up below!")
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
                this.setState({
                    modal: false
                  })
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


        <div>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                <ModalHeader className="loginModalHeader" toggle={this.toggle}><h2 className="modalLantern">L A N T E R N</h2></ModalHeader>
                <ModalBody>
                    Sign up to explore America's 58 National Parks.
                    <section className="registerModal">
                <form className="registerContainer"onSubmit={this.handleRegister}>

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
                </form>

            </section>
                </ModalBody>
                <ModalFooter>
                    <Button color="dark" className="searchParkButton modalButton" onClick={() => this.constructNewUser()}>Signup</Button>{' '}
                    {/* <Button color="dark" className="searchParkButton modalButton" onClick={this.toggle}>Cancel</Button> */}
                </ModalFooter>
                </Modal>






                <section className="login">
                <form className="registerContainer" onSubmit={this.handleLogin}>                    <h2>Welcome to</h2>
                         <h1><strong>L A N T E R N</strong></h1>
                         <img src={dividerLine} className="loginDividerLine" alt="dividerLine"></img>
                    <label htmlFor="inputUsername">
                    </label> <br></br>


                    <p className="appDesc">We make camping in our National Parks easy.</p>

                    <section className="everythingButTheHeader">
                    <img src={inputBox} className="inputBox" alt="inputBox"></img>
                    </section>


                    <section className="moveInputLines">
                        <input onChange={this.handleFieldChange} type="text"
                            id="username"
                            placeholder="Username"
                            required autoFocus="" />
                            <br></br>

                        <br></br>
                        <input onChange={this.handleFieldChange} type="password"
                            id="password"
                            placeholder="Password"
                            required />
                            <br></br>
                        </section>
                    <div className="centerThatThing">
                    <button type="submit" className="btn btn-dark signIn">Log In</button>
                    </div>
                    <Button className="btn btn-dark signUp" onClick={this.toggle}>Sign Up</Button>

                </form>
            </section>
      </div>




        )
    }
}