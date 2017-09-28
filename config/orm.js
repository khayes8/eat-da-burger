var connection = require("./connection.js");
// Object Relational Mapper (ORM)
//table data time, burger, devoured, id
var orm = {
  all: function(tableInput, cb) {
    var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  insertOne: function(table, cb) {
    var queryString = "INSERT INTO" + table + "(burger_name, devoured, time,) VALUES (?, ?, ?)";
    connection.query(queryString, [req.body.burger_name, req.body.devoured, req.body.time], function(err, result) {
      if(err) {
        throw err;
      }
      console.log(result);
      res.redirect("/");
    });
  },
  updateOne: function(table, cb) {
    var queryString = "UPDATE burgers SET burger_name = ?, devoured = ?, time = ? WHERE id = ?";
    connection.query(queryString, [req.body.burger_name, req.body.devoured, req.body.time, req.params.id], function(err, result) {
     if (err) {
      throw err;
    }
    console.log(result);
    res.redirect("/");
    });
  }

};
module.exports = orm;