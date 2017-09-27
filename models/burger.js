var orm = require("../config/orm.js")

var burgers = {
  all: function(cb) {
    orm.all("burgers", function(res) {
      cb(res);
    });
  },
  insert: function(cb){
  	orm.insertOne("burgers", function(res){
  	  cb(res);
  	});
}

   // update: function(cb){
   // 	orm.updateOne("burgers", function(res)){
   // 	cb(res)	;
   // 	}
   // }

}


module.exports = burgers;
