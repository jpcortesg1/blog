// Required modules
const router = require("express").Router();

// Controllers
const {
  create,
  update,
  deletePost,
  getPost,
  getAll,
} = require("./../controllers/post");

// Get all post
router.get("/", getAll);

// Get post
router.get("/:id", getPost);

// Delete
router.delete("/:id", deletePost);

// Create
router.post("/", create);

// Update post
router.put("/:id", update);

module.exports = router;
