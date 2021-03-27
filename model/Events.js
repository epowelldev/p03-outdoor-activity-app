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
  }],
  image: {
    url: {
      type: String,
      required: false,
      default: "http://res.cloudinary.com/dqbo8ib1r/image/upload/v1616723670/JoinUs/j6b3r4w99auhviobdxkr.jpg"
    },
    id: {
      type: String,
      required: false
    }
  }

});


var Events = mongoose.model("Events", EventSchema);

module.exports = Events;
