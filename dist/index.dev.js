"use strict";

var express = require('express');

var mongoose = require('mongoose');

var bodyParser = require('body-parser');

var app = express();
var port = 1818; // create application/json parser

var jsonParser = bodyParser.json();

var userRoutes = require('./user');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
})); // app.use(express.static(path.join(__dirname)));

app.use('/users', userRoutes);
mongoose.connect('mongodb://127.0.0.1:27017/item', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}); // Log error if not connected

mongoose.connection.on('error', console.error.bind(console, 'Connection error.')); // Log status if connected to database

mongoose.connection.once('open', function () {
  // we're connected!
  console.log("Connected to database.");
});
app.listen(port, function () {
  console.log("Example app listening on port ".concat(port));
});
//# sourceMappingURL=index.dev.js.map
