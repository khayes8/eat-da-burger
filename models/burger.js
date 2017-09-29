var orm = require("../config/orm.js")

var burgers = {
  all: function(cb) {
    orm.all("burgers", function(res) {
      cb(res);
    });
  },
  insert: function(burger, devoured, date, cb){
  	orm.insert(burger, devoured, date, function(res){
  	  cb(res);
  	});
},

   update: function(burger, devoured, date, id, cb){
    orm.update(burger, devoured, date, id, function(res){
      cb(res);
    });
   }

}


module.exports = burgers;
