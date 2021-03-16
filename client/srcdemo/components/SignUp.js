import React,  { useState } from 'react'
import {Redirect,  Link } from "react-router-dom";

import AUTH from "../utils/AUTH";





const SignUp = () => {

    const [signUpState, setSignUpState] = useState({ username: '', email: '', password: '' , firstname:'default',lastname:'default'});
    const { username, email, password } = signUpState;
    const [loggedIn, setLoggedIn] = useState(false);



    function handleSubmit(e) {
        e.preventDefault()

        AUTH.signup( signUpState)
               .then(setSignUpState({ username: '', email: '', password: '' }))
            //    .then(AUTH.login(username, password))           
               .then(setLoggedIn(true))
       
    }

    function handleChange(e) {
        setSignUpState({ ...signUpState, [e.target.name]: e.target.value })
        console.log(signUpState)
    }
 
    // if (loggedIn) {
    //     return <Redirect to={{ pathname: "/Events" }} />;
    //   } else {
    return (
        <div>
            <h1>{loggedIn ? "logged in" : "not logged in"}</h1>
            <h1 > sign-up</h1>

            <form action="/api/user/register" onSubmit={handleSubmit}>
                <label htmlFor="fname">username :</label>
                <input type="text" id="fname" name="username" placeholder="Name" value={username} onChange={handleChange}></input>

                <label htmlFor="email">e-mail:</label>
                <input type="text" id="email" name="email" placeholder="Email" value={email} onChange={handleChange}></input>
                <label htmlFor="password">password:</label>
                <input type="password" id="password" name="password" placeholder="Password" value={password} onChange={handleChange}></input>
                <input type="submit" value="Submit"></input>

            </form>
            <h3><Link to="/Login">Login</Link></h3>

        </div>
    )
}
// }
export default SignUp
