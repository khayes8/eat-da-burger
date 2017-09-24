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
}
  // insertOne: function(/*parameters go here*/) {
  //   var queryString = "SELECT ?? FROM ?? ORDER BY ?? DESC";
  //   console.log(queryString);
  //   connection.query(queryString, [whatToSelect, table, orderCol], function(err, result) {
  //     console.log(result);
  //   });
  // },
  // updateOne: function(/*parameters go here*/) {
  //   var queryString = "SELECT ??, COUNT(??) AS count FROM ?? LEFT JOIN ?? ON ??.??= ??.id GROUP BY ?? ORDER BY count DESC LIMIT 1";
  //   connection.query(queryString, [tableOneCol, tableOneCol, tableOne, tableTwo, tableTwo, tableTwoForeignKey, tableOne, tableOneCol], function(err, result) {
  //     console.log(result);
  //   });
  // }
// };
module.exports = orm;