import { ALL_EVENTS, JOINED_EVENTS, ORGANIZED_EVENTS } from '../types';

const eventsReducer = (state, action) => {
  switch (action.type) {
    case ALL_EVENTS:
      return {
        
        eventsState: action.payload,
        eventType: "allEvents"

      };

    case JOINED_EVENTS:
      return {
       
        eventsState: action.payload,
        eventType: "myEvents"
      };

    case ORGANIZED_EVENTS:
      return {
        
        eventsState: action.payload,
        eventType: "organizedEvents"
      };
      

    default: 
  }
}

export default eventsReducer;