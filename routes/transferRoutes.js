const express = require('express');
const router = express.Router();
const transferController = require('../controllers/transferController');
const upload = require('../middleware/uploadMiddleware');

router.post('/transfers', upload.single('coverPhoto'), transferController.createTransfer);
router.get('/transfers', transferController.getAllTransfers);
router.get('/transfers/:id', transferController.getTransferById);
router.put('/transfers/:id', upload.single('coverPhoto'), transferController.updateTransfer);
router.delete('/transfers/:id', transferController.deleteTransfer);

module.exports = router;
