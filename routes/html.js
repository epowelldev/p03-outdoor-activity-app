const router = require("express").Router();
var path = require("path");




router.get("/login", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/login.html"));
});
router.get("/events", function (req, res) {
   res.sendFile(path.join(__dirname, "../public/events.html"));
});


router.get("/logout", function (req, res) {
   res.sendFile(path.join(__dirname, "../public/logout.html"));
});

router.get('/auth', (req,res)=> { 
    res.sendFile(path.join(__dirname, "../public/auth.html"));
})

router.get("/addevent", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/addevent.html"));
});
router.get("/joinevent", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/joinevent.html"));
});
router.get("/events", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/events.html"));

});



module.exports = router


