const router = require("express").Router();
const eventsController = require("../../controllers/eventsController");


router.get("/all", eventsController.getAllEvents);
router.post("/add", eventsController.addEvent);
router.post("/join", eventsController.joinEvent);


module.exports = router;