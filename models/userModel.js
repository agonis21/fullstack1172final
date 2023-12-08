const mongoose = require('../db');

const userSchema = new mongoose.Schema({
  fullname: String,
  userhandle: String,
  userpassword: String
}, {
  timestamps: true
});

const User = mongoose.model('User', userSchema);

module.exports = User;
