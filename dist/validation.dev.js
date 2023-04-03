"use strict";

// const { check, validationResult } = require('express-validator');
var _require = require('express-validator'),
    body = _require.body,
    validationResult = _require.validationResult;

var multer = require('multer');

var validateUser = [body('name').notEmpty().withMessage('Movie name is required').isString().withMessage('Movie name must be a string'), body('ratings').notEmpty().withMessage('Movie ratings is required').isNumeric().withMessage('Movie ratings must be a number'), // body('image')
// .notEmpty()
// .withMessage('Movie image is required')
// .isURL()
// .withMessage('Movie image must be a URL'),
body('cast').isArray().withMessage('Movie cast must be an array'), body('releaseDate').notEmpty().withMessage('Movie release date is required').isISO8601().withMessage('Movie release date must be a valid ISO 8601 date'), body('description').notEmpty().withMessage('Movie description is required').isString().withMessage('Movie description must be a string'), body('duration').notEmpty().withMessage('Movie duration is required').isNumeric().withMessage('Movie duration must be a number')];
module.exports = validateUser;
//# sourceMappingURL=validation.dev.js.map
