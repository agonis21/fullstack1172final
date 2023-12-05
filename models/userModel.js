// models/userModel.js
const mongoose = require('../db');

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  // Add more fields as needed
});

const User = mongoose.model('User', userSchema);

module.exports = User;
