import React, { useEffect, useContext } from 'react'
import EventCardList from "./EventCardList"
import EventsContext from "../../EventsContext/Events/EventsContext";


const EventsCard = () => {
    const eventsContext = useContext(EventsContext);
   
    useEffect(() => {
        eventsContext.allEvents()
    }, []);


const allEvents=eventsContext.eventsState
console.log(allEvents)
console.log(eventsContext.eventType)
    return (

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


