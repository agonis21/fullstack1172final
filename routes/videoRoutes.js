const express = require('express');
const router = express.Router();
const videoController = require('../controllers/videoController');
const path = require("path");

// router.use(cors());
// router.use(express.json());

// router.set('views', path.join(__dirname, '..', 'views'));
// router.set('view engine', 'pug');


router.get('/', videoController.getDashboard);
router.get('/dashboard', videoController.getDashboard);

router.get('/new_video', videoController.getUploadVideo);
router.post('/new_video', videoController.postUploadVideo);


module.exports = router;
