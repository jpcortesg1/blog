const User = require("./../models/Users");
const Post = require("./../models/Post");
const { response } = require("express");

// Get user
const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findUser(null, id);
    const { password, ...others } = user._doc;
    res.status(200).json(others);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Delete user
const deleteUser = async (req, res) => {
  if (User.equalId(req)) {
    try {
      // Find user
      const { id } = req.params;
      const user = await User.findUser(null, id);
      try {
        // Delete post of user
        const { username } = user.username;
        await Post.deleteAllPublications(username);

        // Delete user
        await User.deleteUser(id);

        // Responde
        res.status(200).json("User has been deleted...");
      } catch (error) {
        res.status(500).json(error);
      }
    } catch (error) {
      res.status(500).json("User not found");
    }
  } else {
    res.status(401).json("You can delete only you account!");
  }
};

// Update user
const update = async (req, res) => {
  if (User.equalId(req)) {
    if (req.body.password) {
      const { password } = req.body;
      req.body.password = await User.encryptPassword(password);
    }
    try {
      const { body } = req;
      const updateUser = await User.updateUser(body);
      res.status(200).json(updateUser);
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res.status(401).json("You can update only you account!");
  }
};

module.exports = {
  update,
  deleteUser,
  getUser,
};
