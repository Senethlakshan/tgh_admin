const { MICE } = require('../models');

exports.createMICE = async (req, res) => {
  try {
    const { title, description } = req.body;
    const coverPhoto = req.file ? req.file.filename : null;
    const mice = await MICE.create({ title, description, coverPhoto });
    res.status(201).json(mice);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAllMICEs = async (req, res) => {
  try {
    const mice = await MICE.findAll();
    res.status(200).json(mice);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getMICEById = async (req, res) => {
  try {
    const mice = await MICE.findByPk(req.params.id);
    if (!mice) return res.status(404).json({ error: 'MICE detail not found' });
    res.status(200).json(mice);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateMICE = async (req, res) => {
  try {
    const { title, description } = req.body;
    const coverPhoto = req.file ? req.file.filename : null;
    const mice = await MICE.findByPk(req.params.id);
    if (!mice) return res.status(404).json({ error: 'MICE detail not found' });

    mice.title = title;
    mice.description = description;
    if (coverPhoto) mice.coverPhoto = coverPhoto;

    await mice.save();
    res.status(200).json(mice);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteMICE = async (req, res) => {
  try {
    const mice = await MICE.findByPk(req.params.id);
    if (!mice) return res.status(404).json({ error: 'MICE detail not found' });

    await mice.destroy();
    res.status(204).end();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
