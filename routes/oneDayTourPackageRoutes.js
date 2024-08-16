const express = require('express');
const router = express.Router();
const oneDayTourPackageController = require('../controllers/oneDayTourPackageController');
const upload = require('../middleware/uploadMiddleware');

// Multiple file uploads for coverPhoto, mainPhoto, and subPhotos
const cpUpload = upload.fields([{ name: 'coverPhoto', maxCount: 1 }, { name: 'mainPhoto', maxCount: 1 }, { name: 'subPhotos', maxCount: 6 }]);

router.post('/oneDayTourPackages', cpUpload, oneDayTourPackageController.createOneDayTourPackage);
router.get('/oneDayTourPackages', oneDayTourPackageController.getAllOneDayTourPackages);
router.get('/oneDayTourPackages/:id', oneDayTourPackageController.getOneDayTourPackageById);
router.put('/oneDayTourPackages/:id', cpUpload, oneDayTourPackageController.updateOneDayTourPackage);
router.delete('/oneDayTourPackages/:id', oneDayTourPackageController.deleteOneDayTourPackage);

module.exports = router;
