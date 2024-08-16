const { Transfer } = require('../models');

exports.createTransfer = async (req, res) => {
  try {
    const { title, description, prices } = req.body;
    const coverPhoto = req.file ? req.file.filename : null;
    const transfer = await Transfer.create({ title, description, coverPhoto, prices });
    res.status(201).json(transfer);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAllTransfers = async (req, res) => {
  try {
    const transfers = await Transfer.findAll();
    res.status(200).json(transfers);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getTransferById = async (req, res) => {
  try {
    const transfer = await Transfer.findByPk(req.params.id);
    if (!transfer) return res.status(404).json({ error: 'Transfer not found' });
    res.status(200).json(transfer);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateTransfer = async (req, res) => {
  try {
    const { title, description, prices } = req.body;
    const coverPhoto = req.file ? req.file.filename : null;
    const transfer = await Transfer.findByPk(req.params.id);
    if (!transfer) return res.status(404).json({ error: 'Transfer not found' });

    transfer.title = title;
    transfer.description = description;
    if (coverPhoto) transfer.coverPhoto = coverPhoto;
    transfer.prices = prices;

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
