const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/bookingController');

// Create a new booking
router.post('/bookings', bookingController.createBooking);

// Get all bookings
router.get('/bookings', bookingController.getAllBookings);

// Get a single booking by ID
router.get('/bookings/:id', bookingController.getBookingById);

// Update a booking by ID
router.put('/bookings/:id', bookingController.updateBooking);

// Delete a booking by ID
router.delete('/bookings/:id', bookingController.deleteBooking);

// Get all bookings by user ID
router.get('/bookings/user/:userId', bookingController.getBookingsByUserId);

module.exports = router;
