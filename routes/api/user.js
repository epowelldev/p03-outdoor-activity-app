const router = require("express").Router();
const userController = require("../../controllers/userController");
const passport = require("../../passport");

router.post("/register", userController.register);
router.post("/login",passport.authenticate("local"),userController.login);
router.post("/logout", userController.logout);
router.get("/currentuser", userController.auth);
router.get("/:id/myevents", userController.myEvents)



module.exports = router;