var connection = require("./connection.js");
// var bodyParser = require('body-parser');
// Object Relational Mapper (ORM)
//table data time, burger, devoured, id
var orm = {
  all: function(tableInput, cb) {
    var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function(err, res) {
      if (err) {
        throw err;
      }
      cb(res);
    });
  },

  insert: function(burger, devoured, date, cb) {
    var queryString = "INSERT INTO burgers (burger_name, devoured, date) VALUES (?, ?, ?)";
    connection.query(queryString, [burger, devoured, date], function(err, res) {
      if(err) {
        throw err;
      }
      console.log(res);
      // res.redirect("/");
    });
  },
  update: function(burger, devoured, date, id, cb) {
    var queryString = "UPDATE burgers SET burger_name = ?, devoured = ?, date = ? WHERE id = ?";
    connection.query(queryString, burger, devoured, date, id, function(err, res) {
     if (err) {
      throw err;
    }
    console.log(res);
    // res.redirect("/");
    });
  }
}

// };
module.exports = orm;