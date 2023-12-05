// routes/apiRoutes.js
const express = require('express');
const router = express.Router();
const apiController = require('../controllers/apiController');

router.get('/', apiController.apiHome);
router.get('/users', apiController.getUsers);

module.exports = router;
