const db = require("../model");

module.exports = {
    getAllEvents: (req, res) => {
        db.Events.find({}).then((events) => {
            res.json(events);

        });
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

        newEvent.name = name;
        newEvent.address = address;
        //  DATE is ENTERED AS "2020-02-04"
        newEvent.date = date;
        //  TIME IS ENTERED AS "14:00"
        newEvent.time = time;
        newEvent.description = description

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
    },

    joinEvent: (req, res) => {

        let eventId = req.body.eventname;

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


    }





};
