const express = require('express');
const router = express.Router();
const ratingController = require('../controllers/ratingController');

router.post('/ratings', ratingController.createRating);
router.get('/ratings', ratingController.getAllRatings);
router.get('/ratings/:id', ratingController.getRatingById);
router.put('/ratings/:id', ratingController.updateRating);
router.delete('/ratings/:id', ratingController.deleteRating);

// route to get ratings by packageId
router.get('/ratings/package/:packageId', ratingController.getRatingsByPackageId);


module.exports = router;
