/* eslint-disable no-restricted-globals */
import React, { useState, useEffect, Fragment } from 'react';

import API from '../utils/API';

import PlsLogin from './PlsLogin';



import SimpleTabs from "./layout/SimpleTabs";


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
            
                <Fragment>
                    <SimpleTabs loggedIn={loggedIn}/>
                </Fragment>
           
        </Fragment>               
    );
}

export default Events;
