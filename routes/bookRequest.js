const express = require('express');
const router = express.Router();
const bookRequestController = require('../controllers/bookRequestController');

router.post('/bookRequests', bookRequestController.createBookRequest);
router.put('/bookRequests/:id', bookRequestController.updateBookRequest);
router.delete('/bookRequests/:id', bookRequestController.deleteBookRequest);
router.get('/bookRequests', bookRequestController.getAllBookRequests);
router.get('/bookRequests/user/:userId', bookRequestController.getBookRequestsByUserId);

module.exports = router;
