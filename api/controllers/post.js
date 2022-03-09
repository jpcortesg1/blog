// Model
const Post = require("./../models/Post");

// Get all post
const getAll = async (req, res) => {
  const username = req.query.user;
  const catName = req.query.cat;
  try {
    const posts = await Post.findPost(null, { username, catName });
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Get
const getPost = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await Post.findPost(id);
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Delete
const deletePost = async (req, res) => {
  try {
    const { id } = req.params;
    const { username } = req.body;
    const validate = await Post.validateUser(id, username);
    if (validate) {
      try {
        await Post.deletePost(id);
        res.status(200).json("Post has been deleted...");
      } catch (error) {
        res.status(401).json(error);
      }
    } else {
      res.status(401).json("You can delete only your post!");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

// Update
const update = async (req, res) => {
  try {
    const { id } = req.params;
    const { username } = req.body;
    const validate = await Post.validateUser(id, username);
    if (validate) {
      try {
        const { body } = req;
        body.id = id;
        const updatePost = await Post.updatePost(body);
        res.status(200).json(updatePost);
      } catch (error) {
        res.status(401).json(error);
      }
    } else {
      res.status(401).json("You can update only your post!");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

// Create
const create = async (req, res) => {
  const newPost = new Post(req.body);
  try {
    const savedPost = await newPost.save();
    res.status(200).json(savedPost);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  create,
  update,
  deletePost,
  getPost,
  getAll,
};
