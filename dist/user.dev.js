"use strict";

var express = require('express');

var _require = require('./validation'),
    validateName = _require.validateName,
    validateEmail = _require.validateEmail;

var router = express.Router();

var db = require("./database.js"); // const { body, validationResult } = require('express-validator');


var _require2 = require('express-validator'),
    check = _require2.check;

var validateUser = require('./validation');

var multer = require('multer');
/* GET all users listing. */


router.get('/', function (req, res, next) {
  db.User.find().exec().then(function (response) {
    res.send(response);
  })["catch"](function (err) {
    res.send(JSON.parse(JSON.stringify(err)));
  });
});
/* GET User info by id */

router.get('/:id/', function (req, res, next) {
  db.User.findOne({
    _id: req.params.id
  }).exec(function (err, response) {
    res.send(response);
  });
});
/* Create new user. */

router.post('', function _callee(req, res, next) {
  var newUser, result;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          newUser = new db.User(req.body);
          _context.next = 4;
          return regeneratorRuntime.awrap(newUser.save());

        case 4:
          result = _context.sent;
          res.status(201).json(result);
          _context.next = 12;
          break;

        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);
          res.status(500).json({
            error: 'Server error'
          });

        case 12:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 8]]);
});
router.put('/update', function (req, res, next) {
  var data = {
    name: req.body.name,
    ratings: req.body.rating,
    cast: req.body.cast,
    releaseDate: req.body.releaseDate,
    description: req.body.description,
    duration: req.body.duration
  };
  db.User.findOneAndUpdate({
    "_id": req.body.id
  }, {
    $set: data
  }, {
    returnNewDocument: true
  });
});
/* Delete user by id */

router["delete"]("/:id", function _callee2(req, res, next) {
  var deleteResult;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(db.User.deleteOne({
            _id: req.params.id
          }));

        case 3:
          deleteResult = _context2.sent;

          if (deleteResult.deletedCount === 0) {
            res.status(404).json({
              error: "User not found"
            });
          } else {
            res.status(200).json({
              message: "User deleted successfully"
            });
          }

          _context2.next = 11;
          break;

        case 7:
          _context2.prev = 7;
          _context2.t0 = _context2["catch"](0);
          console.log(_context2.t0);
          res.status(500).json({
            error: "Server error"
          });

        case 11:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 7]]);
});
module.exports = router;
//# sourceMappingURL=user.dev.js.map
