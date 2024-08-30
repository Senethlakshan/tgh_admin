const express = require('express');
const router = express.Router();
const travelPackageController = require('../controllers/travelPackageController');
const upload = require('../middleware/uploadMiddleware');

// Multiple file uploads for coverPhoto, mainPhoto, and subPhotos
const cpUpload = upload.fields([
  { name: 'coverPhoto', maxCount: 1 },
  { name: 'mainPhoto', maxCount: 1 },
  { name: 'subPhotos', maxCount: 10 }
]);

// Routes for travel package operations
router.post('/travelPackages', cpUpload, travelPackageController.createTravelPackage);
router.get('/travelPackages', travelPackageController.getAllTravelPackages);
router.get('/travelPackages/:id', travelPackageController.getTravelPackageById);
router.put('/travelPackages/:id', cpUpload, travelPackageController.updateTravelPackage);
router.delete('/travelPackages/:id', travelPackageController.deleteTravelPackage);

module.exports = router;
