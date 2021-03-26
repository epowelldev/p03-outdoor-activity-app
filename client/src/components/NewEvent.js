import {Button, Input, Box, TextField} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import API from "../utils/API";
import React,  { useState, useRef, Fragment, } from 'react'
import EVENT from "../utils/EVENT"
import Navbar from './layout/Navbar';

import newEventPic from "../assets/newEventPic.jpg";
const useStyles = makeStyles({
    formStyles:{
      display:"flex",
      flexDirection:"column",
      width:"50%",
      
      marginLeft:"27%",
      marginTop:"10%",
      backgroundColor:"#5C6D37",
      color:"white",
      borderRadius:"25px",
      paddingTop:"7%",
      opacity:".90",
      flexBasis:"content"
    },
    inputStyles:{
      margin:"5%",
      color:"black",
      backgroundColor:"white"
    },
    ImgStyle:{
      backgroundImage:`url(${newEventPic})`,
      backgroundSize:"cover",
      backgroundPosition:"center",
      height:"100vh",
      width:"100vw",
      display:"flex",
      flexDirection:"column",
      justifyContent:"start",
      marginTop:"0",
      marginLeft:"0",
      margin:"0",
      padding:"0",
      
    
  },
  title:{
    fontFamily:"Sans-serif",
    marginLeft:"30%",
    marginBottom:"10%"
  }
    
  });

function NewEvent(){

    const classes = useStyles();
    const [eventState, setEventState] = useState({ name: '',datetimeInput:'', address: '' , description:''});
    const { name, address,description } = eventState;

    function handleSubmit(e) {
        e.preventDefault()
        const dateTime=eventState.datetimeInput.split("T");
        const date=dateTime[0]
        const time=dateTime[1]
        setEventState({ name, address, description, date,time })
        console.log( name, address, description, date,time)
        EVENT.addEvent({ name, address, description, date,time }).then((res) => {
            console.log(res.data)
            setEventState({ name: '', address: '' ,description:'' })
            window.location.href="/events"
        })
       
    }


    function handleChange(e) {
        e.preventDefault();
        
        setEventState({ ...eventState, [e.target.name]: e.target.value })
        
    }

    return(
      <Fragment>
        <Navbar />
        <Box className={classes.ImgStyle}>
          <form onSubmit={handleSubmit} >
            <Box className={classes.formStyles}>
            <h1 className={classes.title}>Create New Event</h1>
            <Input placeholder="Event Title"  name="name" value={name} onChange={handleChange} className={classes.inputStyles}inputProps={{ 'aria-label': 'Title' }} />
            <Input placeholder="Location"  name="address" value={address} onChange={handleChange} className={classes.inputStyles} inputProps={{ 'aria-label': 'address' }} />
            {/* <Input placeholder="Date" ref={date} name="date"  className={classes.inputStyles} inputProps={{ 'aria-label': 'date' }} />
            <Input placeholder="Time" ref={time}  name="time"  className={classes.inputStyles} inputProps={{ 'aria-label': 'time' }} /> */}
            <Input placeholder="Event Date and Time"  name="datetimeInput"  onChange={handleChange}  className={classes.inputStyles}  type="datetime-local" />
            <Input placeholder="description"  name="description" value={description} onChange={handleChange}  className={classes.inputStyles} inputProps={{ 'aria-label': 'description' }} />
            {/* upload image */}
            <Button onClick={handleSubmit} variant="contained"  className={classes.inputStyles} color="primary">
                Create Event
            </Button>
            </Box>
          </form>
        </Box>
      </Fragment>
    );
}

export default NewEvent;
