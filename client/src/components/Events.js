/* eslint-disable no-restricted-globals */
import React, { useState, useEffect, Fragment } from 'react';
import EVENT from "../utils/EVENT"
import USER from '../utils/USER'
import { Link } from 'react-router-dom';
import { Modal, Button, makeStyles, Paper, Tabs, Tab } from "@material-ui/core";
import API from '../utils/API';
import EventsTable from './EventsTable';
import JoinedEventsTable from './JoinedEventsTable';
import CreatedEventsTable from './CreatedEventsTabe';

import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import SimpleTabs from "../components/layout/SimpleTabs";


const useSStyles=makeStyles({
    btnStyles:{
        margin:"5px",
        backgroundColor:"#5C6D37",
        color:"white"
    }
})

function Events(){
    const classes = useSStyles();

    const [show, setShow] = useState({isVisible:false, updateEventInfo:"" });
    const handleClose = () => setShow({isVisible:false, updateEventInfo:"" });

    const [myEventsState, setmyEventsState] = useState([]);
    const [myOrganizedState, setMyOrganizedState] = useState([]);

    const [eventsState, setEventsState] = useState([]);
    const [loggedIn, setLoggedIn] = useState(false);

    const [userState, setUserState] = useState({ username: "", _id: "" })


    const [updateEventState, setUpdateEvent] = useState({});
    const { name, address, date, time, description } = updateEventState;



    function handleUpdateEvent(e) {
        e.preventDefault();
        setUpdateEvent({ ...updateEventState, [e.target.name]: e.target.value })
        // console.log(updateEventState)
    }

    useEffect(()=>{
        setUpdateEvent(show.updateEventInfo)

    },[show])


    useEffect(() => {
        USER.myEvents(userState._id).then((res) => {
            const data = res.data[0]
            setmyEventsState(JSON.parse(JSON.stringify(data)).events)
            // console.log(JSON.parse(JSON.stringify(data)).events)
        })

    }, [userState])


    useEffect(() => {
        EVENT.findOrganizedEvent(userState._id).then((res) => {
            setMyOrganizedState(res.data)
            console.log("data organized ---------------")
            console.log(res.data)
        })

    }, [userState])


    useEffect(() => {
        EVENT.getAllEvents().then((res) => {
            // console.log(res.data)
            setEventsState(res.data)
        })
            .then(
                API.getUser().then((res) => {
                    // console.log("aut user")
                    // console.log(res.data)
                    setUserState({ username: res.data.username, _id: res.data._id })
                })
            )

    }, []);

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


    

    function logOut(e) {
        e.preventDefault();
        API.logout();
        setLoggedIn(false)
    }
    function joinEvent(eventId) {
        EVENT.joinEvent(eventId).then(window.location.replace("/Events"))

    }
    function leaveEvent(eventId) {
        EVENT.leaveEvent(eventId).then(window.location.replace("/Events"));
    }

    function eventInfo(eventId) {
        EVENT.eventInfo(eventId).then(res => {
            console.log(res.data)
            return(<p>{res.data}</p>)
        })
    }

    function updateEvent(e) {
        e.preventDefault()

        EVENT.updateEvent(show.updateEventInfo._id, updateEventState).then(res => {
            console.log(res.data)
        })       
        .then(window.location.replace("/Events"))         

    }


    return(
        <Fragment>
            {loggedIn &&
                <div>
                    <Button variant="contained" className={classes.btnStyles} onClick={logOut}> log out </Button>
                    <Button variant="contained" className={classes.btnStyles} href="/newEvent">Create Event</Button>


                        {/* <h1>All events</h1>
                        <EventsTable events={eventsState} />
                        <h1>{userState.username}'s events joined</h1>
                        <JoinedEventsTable events={myEventsState} />
                        <h1>{userState.username}'s events organized</h1>
                        <CreatedEventsTable events={myOrganizedState} /> */}

                        <SimpleTabs />
                 
                        {/* <ul>
                            {eventsState.map(event => (
                        
                                <li key={event._id}>{event.name} <button onClick={() => eventInfo(event._id)}>Event Info</button><button onClick={() => joinEvent(event._id)}>join event</button> </li>


                            ))}

                        </ul> */}

                        {/* <ul>
                            {myEventsState.map(myEvent => (
                                <li key={myEvent._id}>{myEvent.name} || {myEvent.address} || {myEvent.date}  <button onClick={() => leaveEvent(myEvent._id)}> Leave Event</button> </li>
                            ))
                            }
                        </ul> */}
                    
                        {/* <ul>
                            {myOrganizedState.map(myOrganizedEvent => (
                                <li key={myOrganizedEvent._id}>{myOrganizedEvent.name} || {myOrganizedEvent.address} || {myOrganizedEvent.date}
                                
                                <button  onClick={() => setShow({isVisible:true, updateEventInfo:myOrganizedEvent})}> update event</button> <button > Remove Event</button>  </li>
                            ))
                            }
                        </ul> */}

                </div>
            }
            {!loggedIn &&
                <div>
                    <h1>please log in to see the events</h1>
                    <h3><Link to="/Signup">SignUp</Link></h3>
                    <h3><Link to="/Login">Login</Link></h3>
                    <h3><Link to="/NewEvent">Add event</Link></h3>
                </div>

            }

        
            
            {/* <Modal open={open}
                    onClose={handleClose}
                show={show.isVisible} onHide={handleClose}
                aria-labelledby="simple-modal-title"
    aria-describedby="simple-modal-description">
        <div>
                <div closeButton>
                    <h2 id="modal-title">Modal heading</h2>
                </div>
                <p id="modal-description">
                <h1>event id: </h1>

                    <form action="/" >
                        <label htmlFor="name">activity name :</label>
                        <input type="text" id="name" name="name" placeholder="avtivity Name" value={name} onChange={handleUpdateEvent}></input>
                        <label htmlFor="address">address:</label>
                        <input type="text" id="address" name="address" placeholder="address" value={address} onChange={handleUpdateEvent}></input>
                        <label htmlFor="date">date:</label>
                        <input type="date" id="date" name="date" placeholder="date" value={date} onChange={handleUpdateEvent}></input>
                        <label htmlFor="time">time:</label>
                        <input type="time" id="time" name="time" placeholder="time" value={time} onChange={handleUpdateEvent}></input>
                        <label htmlFor="description">description:</label>
                        <input type="description" id="description" name="description" placeholder="description" value={description} onChange={handleUpdateEvent}></input>
                        <input type="submit" value="Submit" onClick={updateEvent}></input>

                    </form>

                </p>
            
                    <Button variant="secondary" onClick={handleClose}>
                        Close
        </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
        </Button>
        </div>
            </Modal> */}


        </Fragment>
    );

}

export default Events;