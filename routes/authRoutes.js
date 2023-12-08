const express = require('express');
const router = express.Router();
const apiController = require('../controllers/authController.js');

router.get('/register', apiController.getRegister);
router.post('/register', apiController.postRegister);

router.get('/login', apiController.getLogin);
router.post('/login', apiController.postLogin);

router.get('/users', apiController.getUsers);

module.exports = router;
