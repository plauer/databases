var mysql = require('mysql');
var connection = mysql.createConnection({
  database : "chat",
  user : "root",
  password : "hackreactor"
});
connection.connect();

module.exports = connection;

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".


