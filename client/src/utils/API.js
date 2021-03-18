import axios from "axios";

const API = {

    getEvents: function(){
        return axios.get("/api/events/all");
    },

    createEvent: function(eventData){
        return axios.post("/api/events/add",eventData);
    },

    createUser: function(userData){
        return axios.post("/api/register", userData)
    },

    getUser: function(){
        return axios.get("/api/user/currentuser")
    },
    logout: function(){
        return axios.post("/api/user/logout")
    },
    login: function(username, password){
        return axios.post("/api/user/login",{ username, password })
    },
    signup: function(userData){
        return axios.post("/api/user/register",userData)
    }

};

export default API;