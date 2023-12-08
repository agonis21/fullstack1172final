const mongoose = require('../db');

const videoSchema = new mongoose.Schema({
  videotitle: String,
  videolink: String,
  videouploader: String
}, {
    timestamps: true
});

const Video = mongoose.model('Video', videoSchema);

module.exports = Video;