var express = require("express");

var app = express();

var burgers = require("../models/burger.js");


app.get("/all", function(req, res) {
  burgers.all(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
res.render("index", hbsObject);
  });
});

// router.post("/", function(req, res){
// 	burgers.insert(["burger_name", "devoured", "date"], [req.body.burger_name, req.body.devoured, req.body.date], function(){
// 		res.redirect("/");
// 	}
// )
// })


app.post("/", function(req, res) {
  burgers.insert([
    "burger_name", "devoured", "date"
  ], [
    req.body.burger_name, req.body.devoured, req.body.date
  ], function() {
    res.redirect("/");
  });
});

// router.put("/all" function(req, res){
// 	burgers.updateOne()
	
// })


module.exports = app;
