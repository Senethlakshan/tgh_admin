// routes/blogRoutes.js
const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogController');
const upload = require('../middleware/uploadMiddleware');

router.post('/blogs', upload.single('coverPhoto'), blogController.createBlog);
router.get('/blogs', blogController.getAllBlogs);
router.get('/blogs/:id', blogController.getBlogById);
router.put('/blogs/:id', upload.single('coverPhoto'), blogController.updateBlog);
router.delete('/blogs/:id', blogController.deleteBlog);

module.exports = router;
