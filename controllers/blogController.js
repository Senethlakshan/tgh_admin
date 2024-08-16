// controllers/blogController.js
const { Blog } = require('../models');
const path = require('path');

exports.createBlog = async (req, res) => {
  try {
    const { title, author, publishDate, content, status } = req.body;
    const coverPhoto = req.file ? req.file.filename : null;
    const blog = await Blog.create({ title, author, publishDate, content, coverPhoto, status });
    res.status(201).json(blog);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.findAll();
    res.status(200).json(blogs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getBlogById = async (req, res) => {
  try {
    const blog = await Blog.findByPk(req.params.id);
    if (!blog) return res.status(404).json({ error: 'Blog not found' });
    res.status(200).json(blog);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateBlog = async (req, res) => {
  try {
    const { title, author, publishDate, content, status } = req.body;
    const coverPhoto = req.file ? req.file.filename : null;
    const blog = await Blog.findByPk(req.params.id);
    if (!blog) return res.status(404).json({ error: 'Blog not found' });

    blog.title = title;
    blog.author = author;
    blog.publishDate = publishDate;
    blog.content = content;
    if (coverPhoto) blog.coverPhoto = coverPhoto;
    blog.status = status;

    await blog.save();
    res.status(200).json(blog);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteBlog = async (req, res) => {
  try {
    const blog = await Blog.findByPk(req.params.id);
    if (!blog) return res.status(404).json({ error: 'Blog not found' });

    await blog.destroy();
    res.status(204).end();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
