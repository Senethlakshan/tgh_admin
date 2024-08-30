const express = require('express');
const router = express.Router();
const miceController = require('../controllers/miceController');
const upload = require('../middleware/uploadMiddleware');

router.post('/mice', upload.single('coverPhoto'), miceController.createMICE);
router.get('/mice', miceController.getAllMICEs);
router.get('/mice/:id', miceController.getMICEById);
router.put('/mice/:id', upload.single('coverPhoto'), miceController.updateMICE);
router.delete('/mice/:id', miceController.deleteMICE);


module.exports = router;
