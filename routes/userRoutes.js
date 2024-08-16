const express = require('express');
const authController = require('../controllers/authController');
const adminController = require('../controllers/adminController');
const paymentController = require('../controllers/paymentController');

const router = express.Router();

// Auth routes
router.post('/register', authController.register);
router.post('/login', authController.login);
router.post('/reset-password', authController.resetPassword);
router.post('/logout', authController.logout);

// Admin routes
router.get('/users', adminController.getAllUsers);
router.put('/users/:id', adminController.updateUser);
router.delete('/users/:id', adminController.deleteUser);
router.get('/booking-requests', adminController.getAllBookingRequests);
router.put('/booking-requests/:id', adminController.updateBookingRequest);
router.delete('/booking-requests/:id', adminController.deleteBookingRequest);
router.post('/notify-admin', adminController.notifyAdmin);

// Payment routes
router.post('/process-payment', paymentController.processPayment);

module.exports = router;
