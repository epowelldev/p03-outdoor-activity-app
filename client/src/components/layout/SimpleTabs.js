import React, {useState, useEffect} from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

import { Link } from "react-router-dom";

import EventsTable from "../EventsTable";
import JoinedEventsTable from "../JoinedEventsTable";
import CreatedEventsTable from "../CreatedEventsTabe";

import API from "../../utils/API";
import EVENT from "../../utils/EVENT"
import USER from "../../utils/USER"
import { Button } from "@material-ui/core";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  rowBar: {
    backgroundColor: "#5C6D37",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  tabPanelsOut: {
    width: "100%",
    display: "block",
  },
  tabPanelsInner: {
    width: "95%",
    margin: "auto",
  },
}));

export default function SimpleTabs() {

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
    if(userState._id){
      USER.myEvents(userState._id).then((res) => {
          const data = res.data[0]
          setmyEventsState(data.events)
          // console.log(JSON.parse(JSON.stringify(data)).events)
      })
    }
  }, [userState])


  useEffect(() => {
    if(userState._id){
      EVENT.findOrganizedEvent(userState._id).then((res) => {
          setMyOrganizedState(res.data)
          console.log("data organized ---------------")
          console.log(res.data)
      })
    }
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
      EVENT.joinEvent(eventId).then(window.location.replace("/Events"));

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

  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <div className={classes.rowBar}>
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="All Events" {...a11yProps(0)} />
          <Tab label="Joined Events" {...a11yProps(1)} />
          <Tab label="Organized Events" {...a11yProps(2)} />
        </Tabs>
        <Button variant="text" color="inherit" className={classes.btnStyles} component={Link} to="/newEvent">{loggedIn && "Organize Event"}</Button>
        </div> 
      </AppBar>
      <div className={classes.tabPanels}>
        <div className={classes.tabPanelsInner}>
          <TabPanel value={value} index={0}> 
            <EventsTable events={eventsState} />
          </TabPanel>
          
          <TabPanel value={value} index={1}>
            <JoinedEventsTable events={myEventsState} />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <CreatedEventsTable events={myOrganizedState} userState={userState}/>
          </TabPanel>
        </div>
      </div>
    </div>
  );
}
