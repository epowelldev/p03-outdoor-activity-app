import React, { useReducer, useEffect, useState } from 'react';
import eventsContext from './EventsContext';
import eventsReducer from './EventsReducer';
import { ALL_EVENTS,JOINED_EVENTS,ORGANIZED_EVENTS} from '../types';
import EVENT from "../../utils/EVENT"
import USER from "../../utils/USER"



const EventsState = (props) => {

  const initialState = {eventType:"", eventsState:[ {name: "",address:"",_id:"",date:"",time:"",description:"",image:{url:"http://res.cloudinary.com/dqbo8ib1r/image/upload/v1616723670/JoinUs/j6b3r4w99auhviobdxkr.jpg"}}] }

  const [state, dispatch] = useReducer(eventsReducer, initialState);


  const allEvents = () => {
   
    EVENT.getAllEvents().then((res) => {
    
      console.log(res.data)
      dispatch({
        type: ALL_EVENTS,
        payload: res.data
      })
    })
  };

  const joinedEvents = (id) => {
    USER.myEvents(id).then((res) => {
      const data = res.data[0]
      dispatch({
        type: JOINED_EVENTS,
        payload: data.events
      })
  
    })
  };

  const deleteEvent = (id,userId) => {
  console.log(userId)
  console.log(id)

    EVENT.deleteEvent(id,userId).then(
     
      EVENT.getAllEvents().then((res) => {
        dispatch({
          type: ALL_EVENTS,
          payload: res.data
        })
      }
    )
  
    )
    
  };

  const joinEvent = (id) => {
    EVENT.joinEvent(id).then(
      EVENT.getAllEvents().then((res) => {
        dispatch({
          type: ALL_EVENTS,
          payload: res.data
        })
      }
    )
    ) 
  };

  const leaveEvent = (id) => {
    EVENT.leaveEvent(id).then(
      EVENT.getAllEvents().then((res) => {
        dispatch({
          type: ALL_EVENTS,
          payload: res.data
        })
      }
    )
    ) 
  };

  
  const organizedEvents = (id) => {
    EVENT.findOrganizedEvent(id).then((res) => {
    
      dispatch({
        type: ORGANIZED_EVENTS,
        payload: res.data
      })
  
    })

  };




return (
  <eventsContext.Provider
    value={{
      allEvents,
      joinedEvents,
      organizedEvents,
      deleteEvent,
      joinEvent,
      leaveEvent,
      eventsState: state.eventsState,
      eventType :state.eventType

    }}
  >
    {props.children}
  </eventsContext.Provider>
);
};

export default EventsState;
