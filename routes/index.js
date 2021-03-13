const router = require("express").Router();
const userRoutes = require("./user");




router.use(userRoutes);


module.exports = router;
