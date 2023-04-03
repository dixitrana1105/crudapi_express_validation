var express = require('express');
const { validateName, validateEmail } = require('./validation');
var router = express.Router();

var db = require("./database.js");
// const { body, validationResult } = require('express-validator');
const { check } = require('express-validator');
const validateUser = require('./validation');
const multer = require('multer');



  


/* GET all users listing. */
router.get('/', function (req, res, next) {
	db.User.find().exec().then((response) => {
		res.send(response);
	}).catch((err) => {
		res.send(JSON.parse(JSON.stringify(err)));
	});
});

/* GET User info by id */
router.get('/:id/', function (req, res, next) {
	db.User.findOne({ _id: req.params.id }).exec(function (err, response) {
		res.send(response);
	})
});

/* Create new user. */


router.post('', async (req, res, next) => {
	try {
	  const newUser = new db.User(req.body);
	  const result = await newUser.save();
	  res.status(201).json(result);
	} catch (err) {
	  console.log(err);
	  res.status(500).json({ error: 'Server error' });
	}
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

	db.User.findOneAndUpdate({ "_id": req.body.id }, { $set: data }, { returnNewDocument: true });
});

/* Delete user by id */
router.delete("/:id", async function (req, res, next) {
	try {
		const deleteResult = await db.User.deleteOne({ _id: req.params.id });
		if (deleteResult.deletedCount === 0) {
			res.status(404).json({ error: "User not found" });
		} else {
			res.status(200).json({ message: "User deleted successfully" });
		}
	} catch (err) {
		console.log(err);
		res.status(500).json({ error: "Server error" });
	}
});

module.exports = router;