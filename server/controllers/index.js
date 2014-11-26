var models = require('../models');
var bluebird = require('bluebird');



module.exports = {
  messages: {
    get: function (req, res) {
      console.log("About to respond to Get");
      models.messages.get(function(results) {
        res.json(results);
      });
      // res.json({'cat':'meow'});

    }, // a function which handles a get request for all messages
    post: function (req, res) {
      console.log(req.body);
      var username = req.body.username;
      var text = req.body.text;
      var roomname = req.body.roomname;
      var params = [text, username, roomname];
      models.messages.post(params, function(results) {
        console.log(results)
        res.json(results);
      });
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {
      models.users.post(req.body.username, function(results) {
        console.log("User successfully created");
        res.json(results);
      });
    }
  }
};

