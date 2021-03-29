/* eslint-disable no-restricted-globals */
import React, { useState, useEffect, Fragment } from 'react';
import API from '../utils/API';
import EventCard from './EventCard/EventsCard'
import EventHeader from "./EventCard/EventHeader"


function Events(){
    
    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        API.getUser().then((response) => {
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






    return(
        <Fragment>
         <EventHeader/>
         <EventCard loggedIn={loggedIn}/>
      
        </Fragment>               
    );
}

export default Events;
