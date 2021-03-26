const router = require("express").Router();
const eventsController = require("../../controllers/eventsController");
const parser = require("../../cloudinary/cloudinary");
const cloudinary = require("cloudinary");


router.get("/all", eventsController.getAllEvents);
router.post("/add",parser.single("image"), eventsController.addEvent);
router.put("/:id",parser.single("image"), eventsController.updateEvent);
router.get("/organizer/:id" , eventsController.findOrganizedEvent);
router.delete("/:id", eventsController.deleteEvent)
router.post("/join", eventsController.joinEvent);
router.post("/leave", eventsController.leaveFromEvent);
router.get("/:id", eventsController.eventInfo);

module.exports = router;