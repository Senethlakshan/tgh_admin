const MICE = require('../models/mice');
const Rating = require('../models/Ratings'); 

exports.createMICE = async (req, res) => {
  try {
    const { title, description, country, category, destination, mapUrl, packageContent } = req.body;
    const coverPhoto = req.file ? req.file.filename : null;
    const mice = await MICE.create({ title, description, coverPhoto, country, category, destination, mapUrl, packageContent });
    res.status(201).json(mice);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAllMICEs = async (req, res) => {
  try {
    const mice = await MICE.findAll({
      include: [{ model: Rating, attributes: ['rating', 'reviews'] }] // Include ratings
    });
    res.status(200).json(mice);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getMICEById = async (req, res) => {
  try {
    const mice = await MICE.findByPk(req.params.id, {
      include: [{ model: Rating, attributes: ['rating', 'reviews'] }] // Include ratings
    });
    if (!mice) return res.status(404).json({ error: 'MICE detail not found' });
    res.status(200).json(mice);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateMICE = async (req, res) => {
  try {
    const { title, description, country, category, destination, mapUrl, packageContent } = req.body;
    const coverPhoto = req.file ? req.file.filename : null;
    const mice = await MICE.findByPk(req.params.id);
    if (!mice) return res.status(404).json({ error: 'MICE detail not found' });

    mice.title = title;
    mice.description = description;
    if (coverPhoto) mice.coverPhoto = coverPhoto;
    mice.country = country;
    mice.category = category;
    mice.destination = destination;
    mice.mapUrl = mapUrl;
    mice.packageContent = packageContent;

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
