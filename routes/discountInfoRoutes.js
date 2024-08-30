// routes/discountInfoRoutes.js
const express = require('express');
const router = express.Router();
const discountInfoController = require('../controllers/discountInfoController');

// Create a discount info
router.post('/', discountInfoController.createDiscountInfo);

// Get a discount info by ID
router.get('/:id', discountInfoController.getDiscountInfoById);

// Update a discount info
router.put('/:id', discountInfoController.updateDiscountInfo);

// Delete a discount info
router.delete('/:id', discountInfoController.deleteDiscountInfo);

// Get all discount infos
router.get('/', discountInfoController.getAllDiscountInfos);

module.exports = router;
