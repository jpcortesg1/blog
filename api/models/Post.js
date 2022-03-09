const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },

    description: {
      type: String,
      required: true,
    },

    photo: {
      type: String,
      required: false,
    },

    username: {
      type: String,
      required: true,
    },

    categories: {
      type: Array,
      required: false,
    },
  },
  { timestamps: true }
);

// Delete all post of user
PostSchema.statics.deleteAllPublications = async function (username) {
  await this.deleteMany({ username });
};

// Find post
PostSchema.statics.findPost = async function (id, query) {
  if (query) {
    const { username, catName } = query;
    if (username) {
      return await this.find({ username });
    }
    if (catName) {
      return await this.find({
        categories: {
          $in: [catName],
        },
      });
    }

    return await this.find();
  }

  return await this.findById(id);
};

// Validate post
PostSchema.statics.validateUser = async function (id, username) {
  const post = await this.findById(id);
  return post.username === username;
};

// Delete post
PostSchema.statics.deletePost = async function (id) {
  await this.findByIdAndDelete(id);
};

// Update post
PostSchema.statics.updatePost = async function (post) {
  return await this.findByIdAndUpdate(post.id, { $set: post }, { new: true });
};

// Equal username
PostSchema.methods.equalUsername = function (username) {
  return this.username === username;
};

module.exports = mongoose.model("Post", PostSchema);
