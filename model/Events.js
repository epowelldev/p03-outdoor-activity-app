var mongoose = require("mongoose");


var Schema = mongoose.Schema;


var EventSchema = new Schema({

    name: {
        type: String,
        required: true
    },

    address: {
        type: String,
        required: true,
    },

    date: {
        type: String,
        required: true,
    },

    time: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    organizerId: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },

    attendees: [{
        type: Schema.Types.ObjectId,
        ref: "User",
    }]

});


var Events = mongoose.model("Events", EventSchema);

module.exports = Events;
