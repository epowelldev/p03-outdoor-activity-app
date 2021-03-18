const router = require("express").Router();
const eventsController = require("../../controllers/eventsController");


router.get("/all", eventsController.getAllEvents);
router.post("/add", eventsController.addEvent);
router.put("/:id", eventsController.updateEvent);
router.get("/organizer/:id", eventsController.findOrganizedEvent);
router.post("/join", eventsController.joinEvent);
router.post("/leave", eventsController.leaveFromEvent);
router.get("/:id", eventsController.eventInfo);

module.exports = router;