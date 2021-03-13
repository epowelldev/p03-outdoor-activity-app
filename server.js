const mongoose = require("mongoose");
const express = require("express");
const app = express();
const routes = require("./routes");
const session = require("express-session");
const passport = require("./passport");
const morgan = require("morgan");
const PORT = process.env.PORT || 3001;


var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/join-us";
mongoose.connect(
  MONGODB_URI,
  { useNewUrlParser: true },
  console.log("Connected to MongoDB!")
);




app.use(morgan("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));  // just for developing stage


if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}


app.use(
  session({ secret: "keyboard cat", resave: true, saveUninitialized: true })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(routes);

app.listen(PORT, function() {
  console.log(`🌎  ==> Server now listening on PORT ${PORT}!`);
});
