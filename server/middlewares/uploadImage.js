const { file } = require("googleapis/build/src/apis/file");
const multer = require("multer");

// set storage
const storage = multer.diskStorage({
  // destination
  destination: function (req, res, cb) {
    cb(null, "./uploads/");
  },
  // filename
  filename: function (req, res, cb) {
    cb(null, file.fieldname + "-" + Date.now() + file.originalname);
  },
});

const filerfilter = (req, res, cb) => {
  cb(null, true);
};

let upload = multer({
  storage: storage,
  filerfilter: filerfilter,
});

module.exports = upload.single("avatar");
