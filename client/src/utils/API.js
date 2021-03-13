import axios from "axios";

export default {
    getEvents: function(){
        return axios.get("/api/events");
    },

    createEvent: function(eventData){
        return axios.post("/api/events",eventData);
    },

    createUser: function(userData){
        return axios.post("/api/users", userData)
    }

}