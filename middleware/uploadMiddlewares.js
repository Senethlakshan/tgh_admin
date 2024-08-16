// middleware/uploadMiddleware.js
const multer = require('multer');
const path = require('path');

// Configure multer storage
const storage = multer.memoryStorage(); // Store files in memory
const upload = multer({ storage: storage });

module.exports = upload;
