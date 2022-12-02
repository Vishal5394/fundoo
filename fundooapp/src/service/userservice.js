import axios from 'axios'

export const login = (acceptdata) => {
    let responce = axios.post("http://fundoonotes.incubation.bridgelabz.com/api/user/login", acceptdata)
    return responce
}

export const signup = (acceptdata) => {
    let responce = axios.post("http://fundoonotes.incubation.bridgelabz.com/api/user/userSignUp", acceptdata)
    return responce 
    console.log("Signup in Progress")
}