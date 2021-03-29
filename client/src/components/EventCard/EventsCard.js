import React, { useEffect, useContext } from 'react'
import EventCardList from "./EventCardList"
import EventsContext from "../../EventsContext/Events/EventsContext";
import { makeStyles, Typography } from '@material-ui/core';

const styles = makeStyles((theme) => ({
    title: {
        textTransform: "uppercase",
        color: theme.palette.primary.main,
        fontWeight: "bold",
        marginTop: "12%",
        textAlign:"center",
    },
}))



const EventsCard = () => {
    const eventsContext = useContext(EventsContext);
    const classes = styles();

    useEffect(() => {
        eventsContext.allEvents()
    }, []);


const allEvents=eventsContext.eventsState
console.log(allEvents)
console.log(eventsContext.eventType)
    return (
         allEvents.length < 1 ?
         eventsContext.eventType === "myEvents" ?
            <Typography className={classes.title}>Join an event to see it here!</Typography>
            : 
            <Typography className={classes.title}>Create an event to see it here!</Typography>
        :
        allEvents.map((event) => (
           
            <EventCardList
                key={event._id}
                id={event._id} 
                address={event.address}
                date={event.date}
                time={event.time}
                description={event.description}
                name={event.name}
                image={event.image}
                currentEvent={event}
              
            />
        )
        )
        
    )
}

export default EventsCard


