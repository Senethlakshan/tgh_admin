const { Transfer, Rating } = require('../models');

exports.createTransfer = async (req, res) => {
  try {
    const { title, description, country, category, destination, mapUrl, packageContent, fromLocation, toLocation } = req.body;
    const coverPhoto = req.file ? req.file.filename : null;
    const transfer = await Transfer.create({ title, description, country, category, destination, mapUrl, packageContent, fromLocation, toLocation, coverPhoto });
    res.status(201).json(transfer);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAllTransfers = async (req, res) => {
  try {
    const transfers = await Transfer.findAll({
      include: [{ model: Rating, attributes: ['rating', 'reviews'] }]
    });
    res.status(200).json(transfers);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getTransferById = async (req, res) => {
  try {
    const transfer = await Transfer.findByPk(req.params.id, {
      include: [{ model: Rating, attributes: ['rating', 'reviews'] }]
    });
    if (!transfer) return res.status(404).json({ error: 'Transfer not found' });
    res.status(200).json(transfer);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateTransfer = async (req, res) => {
  try {
    const { title, description, country, category, destination, mapUrl, packageContent, fromLocation, toLocation } = req.body;
    const coverPhoto = req.file ? req.file.filename : null;
    const transfer = await Transfer.findByPk(req.params.id);
    if (!transfer) return res.status(404).json({ error: 'Transfer not found' });

    transfer.title = title;
    transfer.description = description;
    transfer.country = country;
    transfer.category = category;
    transfer.destination = destination;
    transfer.mapUrl = mapUrl;
    transfer.packageContent = packageContent;
    transfer.fromLocation = fromLocation;
    transfer.toLocation = toLocation;
    if (coverPhoto) transfer.coverPhoto = coverPhoto;

    await transfer.save();
    res.status(200).json(transfer);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteTransfer = async (req, res) => {
  try {
    const transfer = await Transfer.findByPk(req.params.id);
    if (!transfer) return res.status(404).json({ error: 'Transfer not found' });

    await transfer.destroy();
    res.status(204).end();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
