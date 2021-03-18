const router = require("express").Router();
const apiRoutes = require("./api");
const htmlRoutes = require("./html")


router.use("/api", apiRoutes);

module.exports = router;
