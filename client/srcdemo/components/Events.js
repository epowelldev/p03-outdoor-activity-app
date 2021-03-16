import React, { useState, useEffect } from 'react';
import axios from "axios"
import AUTH from "../utils/AUTH"
import { Link } from 'react-router-dom';

const Events = () => {

    const [eventsState, setEventsState] = useState([]);
    const [loggedIn, setLoggedIn] = useState(false);

    const [userState, setUserState] =useState("user")

    

    useEffect(() => {
        axios.get("/api/events/all").then((res) => {
            // console.log(res.data)
            setEventsState(res.data)
        })
        .then(
            AUTH.getUser().then((res) => {
                console.log(res.data)
                setUserState(res.data.username)
            })
        )

      
    }, []);

    useEffect(() => {
        AUTH.getUser().then((response) => {
          if (response.data.username) {
            setLoggedIn(true);
       
          } else {
            setLoggedIn(false);
          
          }
        });
        return () => {
            setLoggedIn(false);
         
          };
   
      }, []);


      function logOut(e) {
        e.preventDefault();
       AUTH.logout();
        setLoggedIn(false)

    }
 

    return (
        <>
        {loggedIn &&  
        <div> 
               <button onClick={logOut}> log out </button>
            <h1>username : {userState}</h1>
            <h1>events</h1>
            <ul>
                {eventsState.map(event => (
                    <li >{event.name} || {event.address} </li>
                   

                ))}

            </ul>
        </div>  }

        {!loggedIn && 
        <div>

           <h1>please log in to see the events</h1> 
           <h3><Link to="/SignUp">SignUp</Link></h3>
           <h3><Link to="/Login">Login</Link></h3>
        </div>
        
        }

        </>
    
    )
}

export default Events
