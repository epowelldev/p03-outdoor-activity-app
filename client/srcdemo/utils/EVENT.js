import axios from "axios";

const EVENTS = {
  // Gets all events
  getAllEvents: function () {
    return axios.get('/api/events/all');
  },
  // Add an event
  addEvent: function (newEvent) {
    return axios.post('/api/events/add', newEvent);
  },
  updateEvent: function (id,updatedEvent) {
    return axios.post(`/api/events/${id}`, updatedEvent);
  },
  // join an event
  joinEvent: function (newAttendee) {
    return axios.post('/api/events/join', newAttendee);
  },
  leaveEvent: function (leavingAttendee) {
    return axios.post('/api/events/leave', leavingAttendee);
  },

  eventInfo: function (id) {
    return axios.get(`/api/events/${id}`);
  },
  findOrganizedEvent : function (id){
    return axios.get(`api/events/organizer/${id}`)
  }



};

export default EVENTS;