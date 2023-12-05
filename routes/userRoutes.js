// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Route to get all users
router.get('/users', userController.getAllUsers);

// Route to create a new user
router.post('/users', userController.createUser);

module.exports = router;
