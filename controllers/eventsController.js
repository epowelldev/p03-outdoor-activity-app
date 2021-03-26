const db = require("../model");
const Moment =require ("moment")
const cloudinary = require("cloudinary");

module.exports = {
    getAllEvents: (req, res) => {
        db.Events.find({}).then((events) => {
            res.json(events);
        });
    },
    findOrganizedEvent: (req,res) => {
        let id = req.params.id
        db.Events.find({"organizerId":id}).then((events)=>{
            res.json(events)
        })
    },
    
    eventInfo: (req, res) => {
        let id = req.params.id
        db.Events.findById(id)
            .populate("attendees")
            .then((response) => {
                let timeToEvent = Moment(`${response.date} ${response.time}`).fromNow();
                 res.json({ eventInfo: response, time: timeToEvent });            
            });
    },

    addEvent: (req, res) => {
        const { name, address, date, time, description } = req.body
        let newEvent = {};

        let image = {};

        if (req.file) {
            image.url = req.file.url;
            image.id = req.file.public_id;
        } else {
            image =req.body.image;
        }

        newEvent.name = name;
        newEvent.address = address;
        //  DATE is ENTERED AS "2020-02-04"
        newEvent.date = date;
        //  TIME IS ENTERED AS "14:00"
        newEvent.time = time;
        newEvent.description = description
        newEvent.image = image;
        if (req.user) {

            // takes the organizer's username and finds its objectId 
            db.User.findOne({ username: req.user.username })
                .then(event => newEvent.organizerId = event._id)
                .then(() => {
                    // creates the new event and pushes its id to the organizing user
                    db.Events.create(newEvent)
                        .then((event) => {
                            res.json(event);
                            return db.User.findByIdAndUpdate(
                                newEvent.organizerId,
                                { $push: { events: event._id } },
                                { new: true }
                            )
                        })
                        .catch(err => res.status(422).json(err))
                })
                .catch(err => console.log(err))
        } else {
            res.json({ msg: "not loginned yet" })
        }
        res.json(newEvent)
        console.log(`${newEvent.name} "add event --------------------"`)
    },

    joinEvent: (req, res) => {
        console.log(req.body)
        const eventId = JSON.stringify(req.body).slice(2, 26)
        console.log("event id -----------")
        console.log(JSON.stringify(eventId).slice(2, 26))
        console.log(`id for event is ${eventId}, userID is ${req.user._id}`)
        //two processes in database: taking the eventId and add attendees the userId && taking the userId and add the eventId 
        db.Events.findByIdAndUpdate(eventId,
            {
                $addToSet: { attendees: req.user._id }
            }).then(() => {
                return db.User.findByIdAndUpdate(req.user._id,
                    { $addToSet: { events: eventId } },
                    { new: true })
            })
            .then((response) => {
                res.json(response);

            }).catch(err => res.status(422).json(err));
    },

    leaveFromEvent: (req, res) => {
        console.log(req.body)
        const eventId = JSON.stringify(req.body).slice(2, 26)
        console.log("event id -----------")
        console.log(JSON.stringify(eventId).slice(2, 26))
        console.log(`id for event is ${eventId}, userID is ${req.user._id}`)
        //two processes in database: taking the eventId and add attendees the userId && taking the userId and add the eventId 
        db.Events.findByIdAndUpdate(eventId,
            {
                $pull: { attendees: req.user._id }
            }).then(() => {
                return db.User.findByIdAndUpdate(req.user._id,
                    { $pull: { events: eventId } },
                    { new: true })
            })
            .then((response) => {
                res.json(response);

            }).catch(err => res.status(422).json(err));
    },
    updateEvent: (req, res) => {
            db.Events.findById(req.params.id)
                .then(event => {   
                    const id = event.image.id;   
                    let image = {};  
                    console.log("console.log(req.file)-*************************")
                    console.log(req.file)
                    if (req.file) {
                        console.log(req.file);
                        image.url = req.file.url;
                        image.id = req.file.public_id;
                        // takes the old stored image id and deletes it from cloudinary storage
                        if (id) {
                            cloudinary.v2.uploader.destroy(id, (err, res) => {
                                if (err) console.log(err);
                                console.log("This is the response:" + res)
                            });
                        }
                        // if no new image   current image object becomes new image
                    } else {
                        image = event.image;
                        console.log(image);
                    }


                    db.Events.findByIdAndUpdate(event._id,
                        {
                            $set: {
                                name: req.body.name,
                                address: req.body.address,
                                date: req.body.date,
                                time: req.body.time,
                                description: req.body.description,
                                image : image
                                                           }
                        }, { new: true })
                        .then(updatedEvent => {
                            res.json(updatedEvent)
                        })
                })
                .catch(err => res.json(err));
       
    },

    deleteEvent: (req, res) => {
        let id =  req.params.id;
        console.log(id,"-------")
        console.log(req.body.userId)


        db.Events.findById(req.params.id)
        .then(event => {  
            const imageId = event.image.id
            if (imageId) {
                cloudinary.v2.uploader.destroy(imageId, (err, res) => {
                    if (err) console.log(err);
                 
                });
            }
        })
        
           db.Events.findByIdAndDelete(id)
            .then(    
                 db.User.findByIdAndUpdate(req.body.userId,
                    { $pullAll: { events: [id] } })
                    .then(() => {
                        res.json(`${id} has been deleted`);
                    })
            )
            .then(
                db.Events.findById(req.params.id)
                .then(event => {  
                    const imageId = event.image.id
                    if (imageId) {
                        cloudinary.v2.uploader.destroy(id, (err, res) => {
                            if (err) console.log(err);
                         
                        });
                    }
                })

            )
            .catch(err => res.status(422).json(err));

            

    }


 






};
