const router = require("express").Router();
const eventsController = require("../../controllers/eventsController");


router.get("/all", eventsController.getAllEvents);
router.post("/add", eventsController.addEvent);
router.post("/join", eventsController.joinEvent);
router.get("/:id", eventsController.eventInfo);
router.post("/leave", eventsController.leaveFromEvent);

module.exports = router;