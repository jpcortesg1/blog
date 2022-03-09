// Required modules
const router = require("express").Router();

// Controllers
const { uploadSingle, uploadRes } = require("./../controllers/images");

// Upload file
router.post("/", uploadSingle, uploadRes);

module.exports = router;
