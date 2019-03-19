var express = require("express");
var app = express();
var parser = require("body-parser");
const port = 3000;
require("./models/db");
var mongoose = require("mongoose");
var router = express.Router();
const passport = require("passport");
const LocalStrategy = require("passport-local");

const User = require("./models/user");

//passport
app.use(passport.initialize());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.set("view engine", "ejs");

app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());

//setting middleware
app.use(express.static(__dirname + "public")); //Serves resources from public folder

app.use("/public", express.static(__dirname + "/public"));
var apiRoute = require("./routes/api");

app.use("/api", apiRoute);

app.listen(port, () => {
  console.log("Listening on port", port);
});
