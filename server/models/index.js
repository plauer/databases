var db = require('../db');




module.exports = {
  messages: {
    get: function (callback) {
      // var queryString = "select "
      // db.query(queryString, function(err, rows) {

      // })
    }, // a function which produces all the messages
    post: function (params, callback) {
      var queryString = ""
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};

