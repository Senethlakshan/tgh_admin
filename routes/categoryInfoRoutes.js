// routes/categoryInfoRoutes.js
const express = require('express');
const router = express.Router();
const {
  createCategory,
  getCategoryById,
  updateCategory,
  deleteCategory,
  getAllCategories
} = require('../controllers/categoryInfoController');

// Create a new category
router.post('/categoryInfos', createCategory);

// Get a category by ID
router.get('/categoryInfos/:categoryId', getCategoryById);

// Update a category by ID
router.put('/categoryInfos/:categoryId', updateCategory);

// Delete a category by ID
router.delete('/categoryInfos/:categoryId', deleteCategory);

// Get all categories
router.get('/categoryInfos', getAllCategories);

module.exports = router;
