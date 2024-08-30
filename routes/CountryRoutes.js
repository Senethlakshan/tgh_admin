const express = require('express');
const router = express.Router();
const upload = require('../middleware/uploadMiddleware');
const countryController = require('../controllers/countryController');

// Create a country
router.post('/countries', upload.single('flag'), countryController.createCountry);

// Get a country by ID
router.get('/countries/:id', countryController.getCountryById);

// Update a country
router.put('/countries/:id', upload.single('flag'), countryController.updateCountry);

// Delete a country
router.delete('/countries/:id', countryController.deleteCountry);

// Get all countries
router.get('/countries', countryController.getAllCountries);

// Get countries by name
router.get('/countries/name/:countryName', countryController.getCountriesByName);

module.exports = router;
