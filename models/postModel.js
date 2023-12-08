const mongoose = require('../db');

const postSchema = new mongoose.Schema({
  posttitle: String,
  postlink: String,
  postuser: String
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;