"use strict";

var multer = require('multer');

var path = require('path'); // Set up multer storage


var storage = multer.diskStorage({
  destination: function destination(req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function filename(req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
}); // Set up multer upload object

var upload = multer({
  storage: storage,
  fileFilter: function fileFilter(req, file, cb) {
    if (file.mimetype !== 'image/jpeg' && file.mimetype !== 'image/png') {
      return cb(new Error('Invalid file type.'));
    }

    if (file.size > 5000000) {
      return cb(new Error('File size is too large.'));
    }

    cb(null, true);
  }
});
router.post('/upload', upload.single('image'), function (req, res) {
  if (!req.file) {
    res.status(400).send('No file uploaded.');
  } else {
    res.send("File uploaded successfully: ".concat(req.file.filename));
  }
});
module.exports = router;
module.exports = upload;
//# sourceMappingURL=image.dev.js.map
