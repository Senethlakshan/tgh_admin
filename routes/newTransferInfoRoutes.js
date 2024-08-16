// routes/newTransferInfoRoutes.js
const express = require('express');
const router = express.Router();
const newTransferInfoController = require('../controllers/newTransferInfoController');
const upload = require('../middleware/uploadMiddlewares'); 

// CRUD operations
router.post('/new-transfer-info', upload.single('coverPhoto'), newTransferInfoController.createNewTransferInfo);
router.get('/new-transfer-info', newTransferInfoController.getAllNewTransferInfo);
router.get('/new-transfer-info/:id', newTransferInfoController.getNewTransferInfoById);
router.put('/new-transfer-info/:id', upload.single('coverPhoto'), newTransferInfoController.updateNewTransferInfo);
router.delete('/new-transfer-info/:id', newTransferInfoController.deleteNewTransferInfo);

module.exports = router;
