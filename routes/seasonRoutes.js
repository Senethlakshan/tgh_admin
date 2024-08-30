// routes/seasonRoutes.js
const express = require('express');
const router = express.Router();
const seasonController = require('../controllers/seasonController');

// Create a season
router.post('/', seasonController.createSeason);

// Get a season by ID
router.get('/:id', seasonController.getSeasonById);

// Update a season
router.put('/:id', seasonController.updateSeason);

// Delete a season
router.delete('/:id', seasonController.deleteSeason);

// Get all seasons
router.get('/', seasonController.getAllSeasons);

module.exports = router;
