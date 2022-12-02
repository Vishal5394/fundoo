import React from "react";
import './signup.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useState } from "react";
import { signup } from "../../service/userservice";

const firstNameRegex = /^([A-Z]{1}[a-z,A-Z]{2,})$/;
const lastNameRegex = /^([a-z,A-Z]{2,})$/;
const userNameRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;


function Signup() {
    const [signupdata, setsignupdata] = useState({ firstName: "", lastName: "", email: "", password: "", service: "advance" })
    const [regexdata, setregexdata] = useState({firstNameborder:false, firstNmaehelper:"", lastNameborder:false, lastNamehelper:"" ,
                                        userNameborder:false, userNamehelper:"" ,passwordborder:false ,passwordhelper:""})

    const takeFirstName = (event) => {
        setsignupdata((prevstate) => ({ ...prevstate, firstName: event.target.value }))
        console.log(signupdata)
    }
    const takeLastName = (event) => {
        setsignupdata((prevstate) => ({ ...prevstate, lastName: event.target.value }))
        console.log(signupdata)
    }
    const takeUserName = (event) => {
        setsignupdata((prevstate) => ({ ...prevstate, email: event.target.value }))
        console.log(signupdata)
    }
    const takePassword = (event) => {
        setsignupdata((prevstate) => ({ ...prevstate, password: event.target.value }))
        console.log(signupdata)
    }
    const takeConfirm = (event) => {
        setsignupdata((prevstate) => ({ ...prevstate, confirm: event.target.value }))
        console.log(signupdata)
    }
    const submit = () => {
        console.log(signupdata, "aftersubmit")
        let firstNametest = firstNameRegex.test(signupdata.firstName)
        let lastNametest = lastNameRegex.test(signupdata.lastName)
        let userNametest = userNameRegex.test(signupdata.email)
        let passwordtest = passwordRegex.test(signupdata.password)
        if (firstNametest === false) {
            setregexdata((prevstate) => ({ ...prevstate, firstNameborder: true, firstNamehelper: "Enter Correct First Name" }))
        }
        else if (firstNametest == true) {
            setregexdata((prevstate) => ({ ...prevstate, firstNameborder: false, firstNamehelper: "" }))
        }
        if (lastNametest === false) {
            setregexdata((prevstate) => ({ ...prevstate, lastNameborder: true, lastNamehelper: "Enter Correct First Name" }))
        }
        else if (lastNametest == true) {
            setregexdata((prevstate) => ({ ...prevstate, lastNameborder: false, lastNamehelper: "" }))
        }
        if (userNametest === false) {
            setregexdata((prevstate) => ({ ...prevstate, userNameborder: true, userNamehelper: "Enter Correct UserName" }))
        }
        else if (userNametest == true) {
            setregexdata((prevstate) => ({ ...prevstate, userNameborder: false, userNamehelper: "" }))
        }
        if (passwordtest === false) {
            setregexdata((prevstate) => ({ ...prevstate, passwordborder: true, passwordhelper: "Enter Correct User" }))
        }
        else if (passwordtest == true) {
            setregexdata((prevstate) => ({ ...prevstate,passwordborder: false, passwordhelper: "" }))
        }
        if (firstNametest === true && lastNametest === true && userNametest === true && passwordtest === true) {
            signup(signupdata).then(
                (responce) => {
                    console.log(responce)
                }
            ).catch(
                (error) => {
                    console.log(error)
                }
            )
            console.log("Signup in Successfilly")
        }
    }
    return (
        <div className="Main">
            <div className="child1">
                <div className="head">
                    <h2><font color="blue">G</font>
                        <font color="red">o</font>
                        <font color="yellow">o</font>
                        <font color="blue">g</font>
                        <font color="green">l</font>
                        <font color="red">e</font>
                    </h2>
                    <h3>Create your Google Account</h3>
                </div>
                <div className="text">
                    <TextField id="Firstname" label="First name" variant="outlined" onChange={takeFirstName} error={regexdata.firstNameborder}
                    helperText={regexdata.firstNamehelper} />
                    <TextField id="Lastname" label="Last name" variant="outlined" onChange={takeLastName} error={regexdata.lastNameborder}
                    helperText={regexdata.lastNamehelper}/>
                    <div className="user">
                        <TextField id="Username" label="Username" variant="outlined" onChange={takeUserName} error={regexdata.userNameborder}
                        helperText={regexdata.userNamehelper} />
                        <p>You can use letters, numbers & periods</p>
                        <h4>Use my current email address instead</h4>
                    </div>
                    <div className="password">
                        <TextField id="Password" label="Password" variant="outlined" onChange={takePassword} error={regexdata.passwordborder}
                    helperText={regexdata.passwordhelper} />
                        <TextField id="Confirm" label="Confirm" variant="outlined" onChange={takeConfirm} />
                        <p>Use 8 or more characters with a mix of letters,numbers & symbols</p>
                        <FormControlLabel control={<Checkbox />} label="Show Password" />
                    </div>
                </div>
                <div className="button">
                    <Button variant="text">Sign in instead</Button>
                    <Button variant="contained" onClick={submit}>Next</Button>
                </div>


            </div>
            <div className="child2">
                <img src="https://ssl.gstatic.com/accounts/signup/glif/account.svg" alt="image" />
                <p>One Account. All of Google working for you.</p>
            </div>
        </div>
    )
}

export default Signup