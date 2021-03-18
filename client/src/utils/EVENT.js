import axios from "axios";

const EVENTS = {


  eventInfo: function (id) {
    return axios.get(`/api/events/${id}`);
  },



};

export default EVENTS;