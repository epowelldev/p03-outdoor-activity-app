import axios from "axios";

const USER= {
  // user's  events
  myEvents: function(id) {
    return axios.get(`/api/user/${id}/myevents`);
  },

};

export default USER;