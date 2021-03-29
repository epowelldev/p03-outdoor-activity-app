import { makeStyles } from "@material-ui/core/styles";
import React, { useContext, useState, useEffect } from "react";
import API from "../../utils/API"

import {
    Card,
    CardContent,
    Typography,
    CardMedia,
} from "@material-ui/core";
import Button from '@material-ui/core/Button';
import EventsContext from "../../EventsContext/Events/EventsContext";
import UpdateContext from "../../updateContext/update/updateContext";
import { useHistory } from "react-router-dom"

const styles = makeStyles((theme) => ({
    card: {
        display: "block",
        margin: 7,
        [theme.breakpoints.up("sm")]: {
            display: "flex"
        },
        borderRadius: 5
    },

    caption: {
        textTransform: "uppercase"
    },

    title: {
        textTransform: "uppercase",
        color: theme.palette.primary.main,
        fontWeight: "bold",
        marginTop: 5
    },
    btitle: {
        textTransform: "uppercase",
        color: "#5C6D37",  
        fontWeight: "bold"
    },
    info: {
        marginLeft: 30
    },

    media: {
        width: "auto",
        height: 300,
        [theme.breakpoints.up("sm")]: {
            width: 1500
        },
        flexBasis: "25%"
    },

    content: {
        display: "flex",
        flexDirection: "column",
        flexBasis: "75%",
        backgroundColor: "#eee"
    },

    buttons: {

        marginTop: 30
    },
    delete: {
        marginLeft: 10
    },
    span: {
        color: "#2dad3a" ,
    },
    update:{
        marginLeft: 10
    },

    linkAction: {
        textDecoration: "none",
        textTransform: "uppercase",
        color: theme.palette.primary.main,
        fontWeight: "bold"
    }
}));

const EventCardList = ({ name, id, date, time, description, address, image,currentEvent}) => {
    const [loggedIn, setLoggedIn] = useState(false);
    const eventsContext = useContext(EventsContext);
    const [userState, setUserState] = useState({ username: "", _id: "" })
    let history = useHistory()
    const updateContext = useContext(UpdateContext);

    const classes = styles();
    console.log(image)
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

    const handleClick = () => {
        if (eventsContext.eventType === "organizedEvents") {
            eventsContext.deleteEvent(id,userState._id);
        }
        if(eventsContext.eventType === "allEvents"){
            eventsContext.joinEvent(id)
        }
        if(eventsContext.eventType === "myEvents"){
            eventsContext.leaveEvent(id)
        }
    }

    const handleUpdate=()=>{
        updateContext.update(currentEvent)
        history.push("/update");
       }
    return (


        <Card className={classes.card}>
            <CardMedia image={image.url} title="Event" className={classes.media} />
            <CardContent className={classes.content}>
                <div className={classes.info}>
                    <div className={classes.cardName}>
                        <Typography variant="h6" className={classes.btitle} gutterBottom>
                            <span className={classes.span}>Join-US :</span>  {name}
                        </Typography>
                    </div>
                    <Typography className={classes.title}>Description</Typography>
                    <Typography variant="body1">{description}</Typography>
                    <Typography className={classes.title}>Address</Typography>
                    <Typography variant="body1">{address}</Typography>
                    <Typography className={classes.title}>Date and Time</Typography>
                    <Typography variant="body1">{date} || {time}</Typography>

                    <div className={classes.buttons}>
                     {loggedIn &&  
                        <Button onClick={handleClick} variant="contained" color= {eventsContext.eventType === "organizedEvents" ? "secondary" : "primary"}>

                            {eventsContext.eventType === "organizedEvents" ? "delete event" : eventsContext.eventType === "allEvents" ? "Join Event" : "leave event"}
                        </Button>
                       }
                        {eventsContext.eventType === "organizedEvents" ?
                        <Button className={classes.update} onClick={handleUpdate} variant="contained" color="primary">
                           update event
                        </Button>
                        : ""}
                      

                    </div>
                </div>

            </CardContent>
        </Card>








    )
}

export default EventCardList
