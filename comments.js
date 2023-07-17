//Create web server
var express = require("express");
var app = express();

//Set up body-parser
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//Set up mongoose
var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/yelp_camp");

//Set up campground schema
var campgroundSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String
});

//Compile campground

