import React,{useContext,useState,useEffect} from 'react'
import { makeStyles } from "@material-ui/core/styles";
import {
    Card,
    CardContent,

} from "@material-ui/core";
import Button from '@material-ui/core/Button';
import EventsContext from "../../EventsContext/Events/EventsContext";
import API from "../../utils/API"
import { Link } from "react-router-dom";


const styles = makeStyles((theme) => ({
    card: {
        display: "block",
        margin: 5,
      
        [theme.breakpoints.up("sm")]: {
          display: "flex"
        },
        borderRadius: 0
      },
    
      caption: {
        textTransform: "uppercase"
      },
    
      title: {
        textTransform: "uppercase",
        
        fontWeight: "bold",
        marginTop: 5
      },
      btitle: {
        textTransform: "uppercase",
        color: theme.palette.primary.dark,
        fontWeight: "bold"
      },
    
      cardHeader:{
        display: "flex",
        flexDirection: "raw",
        flexBasis: "100%",
        backgroundColor: "#eee"
    
      },
    
    
      content: {
        display: "flex",
        flexDirection: "column",
        flexBasis: "100%",
        backgroundColor: "#eee"
      },
    
    buttonm:{
        backgroundColor: "#5C6D37",
         color:"#fcfcfc",
    
      marginLeft : 50
    },
    buttono:{
      backgroundColor: "#5C6D37",
       color:"#fcfcfc",
  
    marginLeft : 50
  },
  buttonc:{
    backgroundColor: "#5C6D37",
     color:"#fcfcfc",

  marginLeft : 50
},
    buttonl:{
        marginLeft : 480,
        color:"#fcfcfc",
        backgroundColor: "#5C6D37",
     
    },
    buttonla:{
      marginLeft : 480,
      color:"#fcfcfc",
      backgroundColor: "#2dad3a",
   
  },
  buttonma:{
     color:"#fcfcfc",
    backgroundColor: "#2dad3a",
    marginLeft : 50
},
    
      linkAction: {
        textDecoration: "none",
        textTransform: "uppercase",
        color: theme.palette.primary.main,
        fontWeight: "bold"
      }
}));



const EventHeader = () => {
  const [userState, setUserState] = useState({ username: "", _id: "" })
  const eventsContext = useContext(EventsContext);
  const [loggedIn, setLoggedIn] = useState(false);

const joinedEvents=()=>{
 
if(userState._id){
  
  eventsContext.joinedEvents(userState._id)}
}

const allEvents=()=>{
  eventsContext.allEvents()
}

const organizedEvents=()=>{
  if(userState._id){
  eventsContext.organizedEvents(userState._id);
  }
}

useEffect(() => {
  API.getUser().then((res) => {
    setUserState({ username: res.data.username, _id: res.data._id })
    console.log(userState)
  })
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


    const classes = styles();
    return (
        <Card className={classes.card}>
        
        <CardContent className={classes.content}>
          <div className={classes.cardName}>
         
          </div>

          
          <div className={classes.cardHeader}>

            <Button onClick={allEvents} className={eventsContext.eventType==="allEvents" ? classes.buttonla : classes.buttonl }  variant="contained">
              All Events
           </Button>
           {loggedIn && 
            <Button onClick={joinedEvents} className={eventsContext.eventType==="myEvents" ? classes.buttonma : classes.buttonm} variant="contained" >
              My Events
            </Button>
              }  
              {loggedIn &&   
            <Button onClick={organizedEvents} className={eventsContext.eventType==="organizedEvents" ? classes.buttonma : classes.buttonm} variant="contained" >
              Organized Events
            </Button>
               }
               {loggedIn && 
            <Button variant="contained"  className={classes.buttonc} component={Link} to="/newEvent">Create an Event</Button>
               }
          </div>

        </CardContent>
      </Card>
    )
}

export default EventHeader
