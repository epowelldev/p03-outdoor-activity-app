import React,{useContext,useState,useEffect} from 'react'
import { makeStyles } from "@material-ui/core/styles";
import {
  ButtonGroup,
    Card,
    CardContent,
    Toolbar,

} from "@material-ui/core";
import Button from '@material-ui/core/Button';
import EventsContext from "../../EventsContext/Events/EventsContext";
import API from "../../utils/API"
import { Link } from "react-router-dom";


const styles = makeStyles((theme) => ({
  caption: {
    textTransform: "uppercase"
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
  },
  buttono:{
    backgroundColor: "#5C6D37",
    color:"#fcfcfc",
  },
  buttonc:{
    backgroundColor: "#5C6D37",
    color:"#fcfcfc",
  },
  buttonl:{
    color:"#fcfcfc",
    backgroundColor: "#5C6D37",
  },
  buttonla:{
    color:"#fcfcfc",
    backgroundColor: "#2dad3a",
  },
  buttonma:{
    color:"#fcfcfc",
    backgroundColor: "#2dad3a",
  },
  linkAction: {
    textDecoration: "none",
    textTransform: "uppercase",
    color: theme.palette.primary.main,
    fontWeight: "bold"
  },
  toolbar: {
    display: "flex",
    flexDirection:"row",
    justifyContent: "space-around",
  },
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
    <Card>
      <CardContent className={classes.content}>          
          <Toolbar className={classes.toolbar}>
            <ButtonGroup>
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
            </ButtonGroup>
          </Toolbar>
      </CardContent>
    </Card>
  )
}

export default EventHeader
