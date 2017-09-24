var orm = require("../config/orm.js")

var burgers = {
  all: function(cb) {
    orm.all("burgers", function(res) {
      cb(res);
    });
  },
  insert: function(cb){
  	orm.inserOne("burgers", function(res){
  	  cb(res);
  	});
}
}

// orm.insertOne(/*arguments go here*/);

// orm.updateOne(/*arguments go here*/);

module.exports = burgers;
