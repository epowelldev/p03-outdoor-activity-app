import {Button, Input, Box} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React,  { useState, Fragment, } from 'react'
import EVENT from "../../utils/EVENT"
import Navbar from '../layout/Navbar';

import newEventPic from "../../assets/newEventPic.jpg";
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
    textAlign:"center",
    marginBottom:"10%"
  },
  submitBtn:{
    
    minWidth: 150,
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

function UpdateEvent({currentEvent,setUpdateVis}){

    const classes = useStyles();
    const [eventState, setEventState] = useState({ name: '',datetimeInput:'', address: '' , description:'',image:''});
    const { name, address,description } = eventState;
    const[imageState,SetImageState]=useState({})

    const setImage = event => {
         SetImageState({image: event.target.files[0]})
     }


    
    function updateEvent(e) {
        e.preventDefault()
        const dateTime=eventState.datetimeInput.split("T");
        const date=dateTime[0]
        const time=dateTime[1]
        const image =imageState.image
        setEventState({ name, address, description, date,time,image })
        EVENT.updateEvent(currentEvent._id, { name, address, description, date,time,image }).then(res => {
            console.log(res.data)
        })       
        .then(()=>{setUpdateVis(false)
            window.location.replace("/Events")})        
    }

    function handleChange(e) {
        e.preventDefault();
        
        setEventState({ ...eventState, [e.target.name]: e.target.value })
        
    }

    return(
      <Fragment>
        <Navbar />
        <Box className={classes.ImgStyle}>
          <form >
            <Box className={classes.formStyles}>
            <h1 className={classes.title}>Update Event</h1>
            <Input placeholder={currentEvent.name} name="name" value={name} onChange={handleChange} className={classes.inputStyles}inputProps={{ 'aria-label': 'Title' }} />
            <Input placeholder={currentEvent.address}  name="address" value={address} onChange={handleChange} className={classes.inputStyles} inputProps={{ 'aria-label': 'address' }} />
            <Input placeholder="Event Date and Time"  name="datetimeInput"  onChange={handleChange}  className={classes.inputStyles}  type="datetime-local" />
            <Input placeholder={currentEvent.description}  name="description" value={description} onChange={handleChange}  className={classes.inputStyles} inputProps={{ 'aria-label': 'description' }} />
            <Input type="file" name="image" onChange={setImage} className={classes.inputStyles}/>
            <Button onClick={updateEvent} variant="contained"  className={classes.submitBtn} color="primary">
                Update Event
            </Button>
            </Box>
          </form>
        </Box>
      </Fragment>
    );
}

export default UpdateEvent;
