// Required modules
const router = require("express").Router();

// Controller
const { create, getAll } = require("./../controllers/category");

// Get all
router.get("/", getAll);

// Create
router.post("/", create);

module.exports = router;
