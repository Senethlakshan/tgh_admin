const express = require('express');
const router = express.Router();
const thingsToDoController = require('../controllers/thingsToDoController');
const upload = require('../middleware/uploadMiddleware');

router.post('/thingsToDo', upload.single('coverPhoto'), thingsToDoController.createThingsToDo);
router.get('/thingsToDo', thingsToDoController.getAllThingsToDo);
router.get('/thingsToDo/:id', thingsToDoController.getThingsToDoById);
router.put('/thingsToDo/:id', upload.single('coverPhoto'), thingsToDoController.updateThingsToDo);
router.delete('/thingsToDo/:id', thingsToDoController.deleteThingsToDo);

// Rating routes
// router.post('/ratings', thingsToDoController.addRating);
// router.put('/ratings/:id', thingsToDoController.updateRating);
// router.delete('/ratings/:id', thingsToDoController.deleteRating);

module.exports = router;
