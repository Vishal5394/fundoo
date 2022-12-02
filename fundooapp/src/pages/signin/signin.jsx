import React from "react";
import './signin.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from "react";
import { login } from "../../service/userservice";
import {useNavigate} from "react-router-dom";

const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;

function Signin() {
    const navigate = useNavigate()
    const [signindata, setsignindata] = useState({email:"", password:""})
    const [regexdata, setregexdata] = useState({emailborder:false, emailhelper:"",passborder:false ,passhelper:""})
   
    const takeEmail = (event) => {
        setsignindata((prevstate)=>({ ...prevstate, email:event.target.value})) 
        console.log(signindata)
    }
    const takePassword = (event) => {
        setsignindata((prevstate)=>({ ...prevstate, password:event.target.value})) 
        console.log(signindata)
    }
    const openSignup=()=>{
            navigate('/signup')   
    }

    const submit = () => {
        console.log(signindata,"aftersubmit")
        let emailtest = emailRegex.test(signindata.email)
        let passwordtest = passwordRegex.test(signindata.password)
        if (emailtest===false){
            setregexdata((prevstate)=>({ ...prevstate,emailborder:true,emailhelper:"Enter Correct email"})) 
        }
        else if(emailtest==true){
            setregexdata((prevstate)=>({ ...prevstate,emailborder:false,emailhelper:""})) 
        }
        if (passwordtest===false){
            setregexdata((prevstate)=>({ ...prevstate,passborder:true,passhelper:"Enter Correct password"})) 
        }
        else if(passwordtest==true){
            setregexdata((prevstate)=>({ ...prevstate,passborder:false,passhelper:""})) 
        }
        if (emailtest===true && passwordtest===true ){
            login(signindata).then(
                (responce) =>{
                    console.log(responce); 
                    navigate('/dashboard')
                    localStorage.setItem('token',responce.data.id)}
            ).catch(
                (error) => {
                    console.log(error)
                }
            )
            console.log("log in Successfilly")
        }
    }

    return (
        <div className="main1">
            <div className="Head">
                <h1><font color="blue">G</font>
                    <font color="red">o</font>
                    <font color="yellow">o</font>
                    <font color="blue">g</font>
                    <font color="green">l</font>
                    <font color="red">e</font>
                </h1>
                <h2>Sign In</h2>
                <h2>Use your Google Account</h2>
            </div>
            <div className="textfield">
            <TextField id="Email" label="Email or Phone" variant="outlined" onChange={takeEmail} error={regexdata.emailborder}
            helperText={regexdata.emailhelper}
            />
            <h5>Forgot email?</h5>
            <TextField id="password" label="Password" variant="outlined" onChange={takePassword} error={regexdata.passborder}
             helperText={regexdata.passhelper}
            />
            <h6>Forgot Password?</h6>
            <p>Not your computer? Use Guest mode to sign in privately.</p>
            <h4>Learn more</h4>
            </div>
            <div className="Button">
                <Button variant="text" onClick={openSignup}>Create account</Button>
                <Button variant="contained" onClick={submit}>Next</Button>
            </div>

        </div>
    )


}
export default Signin