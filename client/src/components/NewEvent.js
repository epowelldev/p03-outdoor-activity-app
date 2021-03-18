import {Button, Input, Box, TextField} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import API from "../utils/API";
import React,  { useState, useRef, } from 'react'


const useStyles = makeStyles({
    formStyles:{
      display:"flex",
      flexDirection:"column",
      width:"50%",
      marginLeft:"27%",
      marginTop:"10%",
      
    },
    inputStyles:{
      margin:"30px"
    },
    
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
        API.createEvent({ name, address, description, date,time }).then((res) => {
            console.log(res.data)
            setEventState({ name: '', address: '' ,description:'' })
         
        })
       
    }


    function handleChange(e) {
        e.preventDefault();
        
        setEventState({ ...eventState, [e.target.name]: e.target.value })
        
    }

    return(
        <form onSubmit={handleSubmit} >
        <Box className={classes.formStyles}>
            
        <Input placeholder="Event Title"  name="name" value={name} onChange={handleChange} className={classes.inputStyles}inputProps={{ 'aria-label': 'Title' }} />
            
            
        <Input placeholder="Location"  name="address" value={address} onChange={handleChange} className={classes.inputStyles} inputProps={{ 'aria-label': 'address' }} />
       
        {/* <Input placeholder="Date" ref={date} name="date"  className={classes.inputStyles} inputProps={{ 'aria-label': 'date' }} />
        
        <Input placeholder="Time" ref={time}  name="time"  className={classes.inputStyles} inputProps={{ 'aria-label': 'time' }} /> */}
        <Input placeholder="Event Date and Time"  name="datetimeInput"  onChange={handleChange}  className={classes.inputStyles}  type="datetime-local" />
        
        <Input placeholder="description"  name="description" value={description} onChange={handleChange}  className={classes.inputStyles} inputProps={{ 'aria-label': 'description' }} />
       
        <Button onClick={handleSubmit} variant="contained"  className={classes.inputStyles} color="primary">
            Create Event
        </Button  >
       
        </Box>
      </form>
    );
}

export default NewEvent;
