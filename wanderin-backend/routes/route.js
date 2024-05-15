const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const userController = require('../controllers/userController');
// const uploadFile = require('../controllers/fileUploadController').uploadFile;
// const notificationController = require('../controllers/notificationController');


// Authentication APIs
router.post('/register', userController.register);
router.post('/login', userController.login);

// Hotels APIs
// router.post('/hotels', authMiddleware.isAuth, hotelController.addHotel);


module.exports = router;