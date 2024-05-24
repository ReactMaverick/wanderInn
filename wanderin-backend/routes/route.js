const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const userController = require('../controllers/userController');
const reviewController = require('../controllers/reviewController');
const dealController = require('../controllers/dealController');
const contactController = require('../controllers/contactController');
const hotelController = require('../controllers/hotelController');
const bookingController = require('../controllers/bookingController');
const faqController = require('../controllers/faqController');
// const uploadFile = require('../controllers/fileUploadController').uploadFile;
// const notificationController = require('../controllers/notificationController');


// Authentication APIs
router.post('/register', userController.register);
router.post('/login', userController.login);
router.post('/generateIdToken', userController.generateIdToken);
router.post('/forgotPassword', userController.forgotPassword);

// User APIs
router.get('/getUser', authMiddleware.isAuth, userController.getUser);
router.post('/updateUser', authMiddleware.isAuth, userController.updateUser);

// Hotels APIs
router.post('/addHotel', authMiddleware.isAuth, hotelController.addHotel);
router.get('/getHotels', authMiddleware.isAuth, hotelController.getHotels);
router.get('/getHotelById/:id', authMiddleware.isAuth, hotelController.getHotelById);
router.put('/updateHotel/:id', authMiddleware.isAuth, hotelController.updateHotel);
router.delete('/deleteHotel/:id', authMiddleware.isAuth, hotelController.deleteHotel);
router.delete('/deleteRoomById/:id', authMiddleware.isAuth, hotelController.deleteRoomById);
router.post('/hotelsSearch', authMiddleware.isAuth, hotelController.searchHotels);
router.post('/hotelSearctFilter', authMiddleware.isAuth, hotelController.searchHotelsFilter);

//Booking APIs
router.post('/bookHotel', authMiddleware.isAuth, bookingController.bookHotel);
router.post('/updateBooking/:id', authMiddleware.isAuth, bookingController.updateBooking);
router.post('/cancelBooking/:id', authMiddleware.isAuth, bookingController.cancelBooking);

//Review APIs
router.post('/submitReview', authMiddleware.isAuth, reviewController.submitReview);
router.get('/getReviewsByHotelId/:id', authMiddleware.isAuth, reviewController.getReviewsByHotelId);

//FAQ API's
router.post('/addFaqs', authMiddleware.isAdmin, faqController.createFAQ);
router.get('/faqs', faqController.getFAQs);
router.put('/updateFaqById/:id', faqController.updateFAQ);
router.delete('/deleteFaqById/:id', faqController.deleteFAQ);

//contact us
router.post('/contact', contactController.contactCustomerService);

//Deals controller
router.post('/createDeal', dealController.createDeal);
router.get('/getAllDeals', dealController.getDeals);
router.put('/editDealById/:id', dealController.updateDeal);
router.delete('/deleteDealById/:id', dealController.deleteDeal);

module.exports = router;