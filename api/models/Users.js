// Required modules
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Post = require("./Post");

// Schema base
const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },

    password: {
      type: String,
      required: true,
    },

    profilePic: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

// Encrypt password
UserSchema.statics.encryptPassword = async function (password) {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

// Validate password
UserSchema.methods.validatePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

// Find user
UserSchema.statics.findUser = async function (username, id) {
  if (id) return await this.findById(id);
  return await this.findOne({ username });
};

// Equals id
UserSchema.statics.equalId = function (user) {
  return user.body.userId === user.params.id;
};

// Update user
UserSchema.statics.updateUser = async function (user) {
  const lastUser = await this.findUser(null, user.userId);
  const posts = await Post.findPost(null, { username: lastUser.username });
  posts.map(async (p) => {
    p.username = user.username;
    await Post.updatePost(p);
  });
  return await this.findByIdAndUpdate(
    user.userId,
    { $set: user },
    { new: true }
  );
};

// Delete user
UserSchema.statics.deleteUser = async function (id) {
  await this.findByIdAndDelete(id);
};

module.exports = mongoose.model("User", UserSchema);
