var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Dixie#11",
  database: "burgers_db"
});

// if (process.env.JAWSDB_URL) {
// 	connection = mysql.createConnection(process.env.JAWSDB_URL);
// } else{
// 	connection =mysql.createConnection({
// 		host: 'localhost',
// 		user: 'root',
// 		password: 'hacktheplanet',
// 		database: 'todoagain_db'
// 	});
// };
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});
module.exports = connection;