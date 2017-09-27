var express = require("express");

var router = express.Router();

var burgers = require("../models/burger.js");


router.get("/all", function(req, res) {
  burgers.all(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
res.render("index", hbsObject);
  });
});

router.post("/", function(req, res){
	burgers.insert(["burger_name", "devoured", "date"], [/*request.body.___*/], function(){
		res.redirect("/");
	}
)
})

// router.put()


module.exports = router;
