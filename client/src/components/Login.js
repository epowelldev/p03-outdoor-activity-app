import React, { useEffect, useState } from 'react'
import { Redirect, Link } from "react-router-dom";
import AUTH from "../utils/AUTH";

const Login = () => {
    const [loginState, setLoginState] = useState({ username: '', password: '' });
    const { username, password } = loginState;
    const [logOutState, setLogOutState] = useState(false);
    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        AUTH.logout();

    }, [logOutState]);



    function handleSubmit(e) {
        e.preventDefault()
        AUTH.login(username, password).then((res) => {
            console.log(res.data)
            setLoginState({ username: '', email: '', password: '' })
         setLoggedIn(true)
        })
        console.log(loginState)
    }


    function handleChange(e) {
        e.preventDefault();
        setLoginState({ ...loginState, [e.target.name]: e.target.value })
        console.log(loginState)
    }

    function logOut(e) {
        e.preventDefault();
        setLogOutState(!logOutState)

    }


    if (loggedIn) {
        return <Redirect to={{ pathname: "/Events" }} />;
      } else {
    return (
        <div>

             {/* {loggedIn ? <Redirect to="/dashboard" /> : <PublicHomePage />}   */}
            <h1 >Login</h1>

            <form action="/" onSubmit={handleSubmit}>
                <label htmlFor="fname">username :</label>
                <input type="text" id="fname" name="username" placeholder="Name" value={username} onChange={handleChange}></input>

                <label htmlFor="password">password:</label>
                <input type="password" id="password" name="password" placeholder="Password" value={password} onChange={handleChange}></input>
                <input type="submit" value="Submit"></input>

            </form>

            <button onClick={logOut}> log out </button>

                
                    <h3><Link to="/SignUp">SignUp</Link></h3>
                
        </div>
    )

}
}
export default Login
