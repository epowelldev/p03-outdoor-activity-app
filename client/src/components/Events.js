/* eslint-disable no-restricted-globals */
import React, { useState, useEffect } from 'react';
import EVENT from "../utils/EVENT"
import USER from '../utils/USER'
import { Link } from 'react-router-dom';
import { Modal, Button, makeStyles } from "@material-ui/core";
import API from '../utils/API';
import EventsTable from './EventsTable';
import JoinedEventsTable from './JoinedEventsTable';
import CreatedEventsTable from './CreatedEventsTabe';
import PlsLogin from './PlsLogin';


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
        const [myOrganizedState, setMyOrganizedState] = useState([])
    
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
    return(<>
        {loggedIn &&
            <div>
                <Button variant="contained" className={classes.btnStyles} onClick={logOut}> log out </Button>
                <Button variant="contained" className={classes.btnStyles} href="/newEvent">Create Event</Button>

                <h1>All events</h1>
                

                <EventsTable events={eventsState} />

                <h1> {userState.username}'s events joined</h1>

               

                <JoinedEventsTable events={myEventsState} />
                <h1> {userState.username}'s events organized</h1>

               
                <CreatedEventsTable events={myOrganizedState} />
            </div>
        }
        {!loggedIn &&
            <PlsLogin/>

        }


    </>
    );

}

export default Events;