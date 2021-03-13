const router = require("express").Router();
const db = require("../model");
const passport = require("../passport");
var path = require("path");

router.get("/user", function (req, res) {
    db.Users.find({})
        .then((response) => res.json(response))
});


router.post("/user", (req, res) => {

    const newUser = {};


    newUser.username = req.body.username;
    newUser.firstname = req.body.firstname;
    newUser.lastname = req.body.lastname;
    newUser.password = req.body.password;
    newUser.email = req.body.email;



    db.Users.findOne({ username: newUser.username }, (err, user) => {
        if (err) {
            console.log(err)
        } else if (user) {
            res.json({
                error: `use another username: ${newUser.username}`
            });
        }
        else {
            db.Users.findOne({ email: newUser.email }, (err, user) => {
                if (err) {
                    console.log(err)
                } else if (user) {
                    res.json({
                        error: `use another email: ${newUser.email}`
                    })
                } else {
                    db.Users.create(newUser)
                        .then((response) => res.json(response))
                        //  .then( passport.authenticate('local'))
                        .catch(err => res.status(422).json(err));
                }
            });
        }
    });
});


router.get("/user/:id", (req, res) => {
    console.log(`this is req.params.id ${req.params.id}`)
    db.Users.find({ _id: req.params.id })
        .then(user => res.json(user))
        .catch(err => res.json(err))
});



router.post('/login', (req, res, next) => {
    console.log(req.body)
    next()
},
    passport.authenticate('local'),
    (req, res) => {
        console.log('logged in', req.user);
        var userInfo = {
            id: req.user._id,
            username: req.user.username
        };
        res.send(userInfo);
    }
);


router.post('/logout', (req, res) => {
    if (req.user) {
        req.logout()
        res.send({ msg: 'logging out' })
    }
})



router.get("/login", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/login.html"));
});
router.get("/events", function (req, res) {
   res.sendFile(path.join(__dirname, "../public/events.html"));
});
router.get("/addevent", function (req, res) {
   res.sendFile(path.join(__dirname, "../public/addevent.html"));
});

router.get("/logout", function (req, res) {
   res.sendFile(path.join(__dirname, "../public/logout.html"));
});




module.exports = router


