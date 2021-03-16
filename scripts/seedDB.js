const mongoose = require("mongoose");
const db = require("../models");


mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/joinus"
);

const eventsSeed = [
  {
    category: "Hiking",
    location: "Lake Washington",
    date: "june 21",
   createdBy: "Ali Er"
  },
  {
    category: "Swimming",
    location: "Lake Samamish",
    date: "july 2",
   createdBy: "Hasan Utku"
  },
  {
    category: "Hiking",
    location: "Lake Washington",
    date: "May 21",
   createdBy: "Ali Er"
  },
  {
    category: "Hiking",
    location: "Blue Lake",
    date: "june 21",
   createdBy: "Ali Er"
  },
  {
    category: "Cycling",
    location: "Redmond Trail",
    date: "August 10",
   createdBy: "Tom Hanks"
  },
  {
    category: "Diving",
    location: "Seattle",
    date: "July 15",
   createdBy: "Mary Mor"
  },
  {
    category: "Hiking",
    location: "Lake Washington",
    date: "june 21",
   createdBy: "Ali Er"
  },
  {
    category: "Skiing",
    location: "Mountain Rainer",
    date: "March 26",
   createdBy: "Tim Tiny"
  }
];

db.Events
  .remove({})
  .then(() => db.Events.collection.insertMany(eventsSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
