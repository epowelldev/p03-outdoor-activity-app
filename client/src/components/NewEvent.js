import {Button, Input, Box} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React,  { useState, Fragment, } from 'react'
import EVENT from "../utils/EVENT"
import Navbar from './layout/Navbar';

import newEventPic from "../assets/newEventPic.jpg";
const useStyles = makeStyles({
    formStyles:{
      display:"flex",
      flexDirection:"column",
      width:"50%",
      height:"80vh",
      justifyContent:"space-around",
      marginLeft:"24%",
      marginTop:"10%",
      backgroundColor:"#5C6D37",
      color:"white",
      borderRadius:"25px",
      // paddingTop:"7%",
      opacity:".90",
      flexBasis:"content"
    },
    inputStyles:{
      // margin:"5%",
      color:"black",
      width:"75%",
      alignSelf:"center",
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
    textAlign:"center",
    // marginBottom:"10%"
  },
  submitBtn:{
    
    minWidth: 100,
    width:200,
    alignSelf:"center",
    transition: '0.3s cubic-bezier(.47,1.64,.41,.8)',
    background:"white",
    margin:"5%",
    '&:hover': {
      background:"white",
      transform: 'scale(1.1)',
    },
    borderRadius: 50,
    color: "black",
    textTransform: 'none',
    fontSize: 15,
    fontWeight: 700,
    padding:9
 }
    
  });

function NewEvent(){

    const classes = useStyles();
    const [eventState, setEventState] = useState({ name: '',datetimeInput:'', address: '' , description:'',image:''});
    const { name, address,description } = eventState;
    const[imageState,SetImageState]=useState({})

    const setImage = event => {
      
         SetImageState({image: event.target.files[0]})
         console.log(imageState)
     }


    function handleSubmit(e) {
        e.preventDefault()
        
        const dateTime=eventState.datetimeInput.split("T");
        const date=dateTime[0]
        const time=dateTime[1]
        const image = imageState
        setEventState({ name, address, description, date,time,image })
        let formData = new FormData();
    formData.append("name", name);
    formData.append("address", address);
    formData.append("date", date);
    formData.append("time", time);
    formData.append("description", description);
    formData.append("image", imageState.image);

        console.log( name, address, description, date,time)

        EVENT.addEvent(formData).then((res) => {
            console.log(res.data)
            setEventState({})
            SetImageState({})
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
            <Input type="file" name="image" onChange={setImage} label="Add Image" className={classes.inputStyles}/>
            <Button onClick={handleSubmit} variant="contained"  className={classes.submitBtn} color="primary">
                Create Event
            </Button>
            </Box>
          </form>
        </Box>
      </Fragment>
    );
}

export default NewEvent;
