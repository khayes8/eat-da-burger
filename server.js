var express = require ("express");
var bodyParser = require ("body-parser");
var method_override = require ("method-override");

var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Static directory
app.use(express.static("public"));

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

var routes = require("./controllers/burgers_controller.js");

app.use("/", routes);

/*
enter burger
add to the database
new burger on the screen

devour burger
change state in database

delete burger
disappears from screen
deleted from database
*/