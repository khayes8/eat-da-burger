var express = require("express");

var app = express();

var burgers = require("../models/burger.js");


app.get("/", function(req, res) {
  burgers.all(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
res.render("index", hbsObject);
  });
});


app.post("/", function(req, res) {
  console.log(req.body);
  burgers.insert(
    req.body.burger_name, req.body.devoured, req.body.date
  , function() {
    // res.redirect("/");
    console.log("page redirected");
    res.end();
  });
});

app.put("/", function(req, res){
	burgers.update(req.body.burger_name, req.body.devoured, req.body.date
  ,function() {
    // res.redirect("/");
    console.log("page redirected");
    res.end();
  });	
});


module.exports = app;
