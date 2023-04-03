"use strict";

var mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/item'); // Log error if not connected

mongoose.connection.on('error', console.error.bind(console, 'Connection error.')); // Log status if connected to database

mongoose.connection.once('open', function () {
  // we're connected!
  console.log("Connected to database.");
});
/** Global object for this module */

var db = {};
/** Define user schema */

var userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  ratings: {
    type: Number,
    required: true
  },
  cast: [{
    name: String,
    character: String
  }],
  releaseDate: {
    type: Date
  },
  description: {
    type: String
  },
  duration: {
    type: Number
  },
  image: {
    type: String
  },
  active: {
    type: Boolean,
    "default": false
  },
  created: {
    type: Date,
    "default": Date.now
  }
});
/** Tie schema to mongoose model and add it to global object*/

db.User = mongoose.model('User', userSchema);
/** Export global database object */

module.exports = db;
//# sourceMappingURL=database.dev.js.map
