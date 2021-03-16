const mongoose = require("mongoose");
const db = require("../model");
mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/join-us"
  );

  findAllUsers= async ()=>{
 // await db.Users.update({ "_id" :"604d160c1d417c370844a4cf"}, {$set:{"lastname":"BigBrown"}});
const username= await db.Users.find({"_id": "604d160c1d417c370844a4cf" })
console.log(username)
  }

// findAllUsers()

findAllEvents= async ()=>{

   await db.Events.findByIdAndUpdate("604d2784d41e382354cda15b",
        {
            $addToSet: { "attendees": "604c2669358ad14ce0827d17"}
        })

// await db.Events.findByIdAndUpdate("604d2784d41e382354cda15b",{ address: 'school' })

        const events= await db.Events.find({"_id": "604d2784d41e382354cda15b" })   
        console.log(events) 
}


findAllEvents()