const express = require('express');
const router = express.Router();
const userRequestController = require('../controllers/userRequestController');

// Route to create a new user request
router.post('/userRequests', userRequestController.createUserRequest);

// Route to get all user requests
router.get('/userRequests', userRequestController.getAllUserRequests);

// Route to get a user request by ID
router.get('/userRequests/:id', userRequestController.getUserRequestById);

// Route to update a user request by ID
router.put('/userRequests/:id', userRequestController.updateUserRequest);

// Route to delete a user request by ID
router.delete('/userRequests/:id', userRequestController.deleteUserRequest);

module.exports = router;
