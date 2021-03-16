const router = require("express").Router();
const userRoutes = require("./user")
const eventsRoutes = require("./events")

router.use('/user', userRoutes )
router.use('/events', eventsRoutes )



module.exports = router;
