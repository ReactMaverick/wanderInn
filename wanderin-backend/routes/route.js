const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const userController = require('../controllers/userController');
const hotelController = require('../controllers/hotelController');
// const uploadFile = require('../controllers/fileUploadController').uploadFile;
// const notificationController = require('../controllers/notificationController');


// Authentication APIs
router.post('/register', userController.register);
router.post('/login', userController.login);

// Hotels APIs
router.post('/addHotel', authMiddleware.isAuth, hotelController.addHotel);
router.get('/getHotels', authMiddleware.isAuth, hotelController.getHotels);
router.get('/getHotelById/:id', authMiddleware.isAuth, hotelController.getHotelById);
router.post('/updateHotel/:id', authMiddleware.isAuth, hotelController.updateHotel);
router.delete('/deleteHotel/:id', authMiddleware.isAuth, hotelController.deleteHotel);
router.delete('/deleteRoomById/:id', authMiddleware.isAuth, hotelController.deleteRoomById);

module.exports = router;