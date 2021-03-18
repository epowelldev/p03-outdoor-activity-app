import axios from "axios";

const EVENTS = {


  eventInfo: function (id) {
    return axios.get(`/api/events/${id}`);
  },
  leaveEvent: function (leavingAttendee) {
    return axios.post('/api/events/leave', leavingAttendee);
  }



};

export default EVENTS;