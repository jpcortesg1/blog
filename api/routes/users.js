// Required modules
const router = require("express").Router();

// Controllers
const { update, deleteUser, getUser } = require("./../controllers/user");

// Update
router.put("/:id", update);

// Delete
router.delete("/:id", deleteUser);

// Get user
router.get("/:id", getUser);

module.exports = router;
