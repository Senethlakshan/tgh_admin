const { NewTransferInfo } = require('../models');

// Function to handle base64 encoding
const convertToBase64 = (file) => {
  return `data:${file.mimetype};base64,${file.buffer.toString('base64')}`;
};

exports.createNewTransferInfo = async (req, res) => {
  try {
    const { title, description, prices } = req.body;
    let coverPhoto = null;

    if (req.file) {
      coverPhoto = convertToBase64(req.file);
    }

    const newTransferInfo = await NewTransferInfo.create({ title, description, coverPhoto, prices });
    res.status(201).json(newTransferInfo);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAllNewTransferInfo = async (req, res) => {
  try {
    const newTransferInfo = await NewTransferInfo.findAll();
    res.status(200).json(newTransferInfo);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getNewTransferInfoById = async (req, res) => {
  try {
    const newTransferInfo = await NewTransferInfo.findByPk(req.params.id);
    if (!newTransferInfo) return res.status(404).json({ error: 'Transfer info not found' });
    res.status(200).json(newTransferInfo);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateNewTransferInfo = async (req, res) => {
  try {
    const { title, description, prices } = req.body;
    const newTransferInfo = await NewTransferInfo.findByPk(req.params.id);
    if (!newTransferInfo) return res.status(404).json({ error: 'Transfer info not found' });

    newTransferInfo.title = title;
    newTransferInfo.description = description;
    newTransferInfo.prices = prices;

    if (req.file) {
      newTransferInfo.coverPhoto = convertToBase64(req.file);
    }

    await newTransferInfo.save();
    res.status(200).json(newTransferInfo);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteNewTransferInfo = async (req, res) => {
  try {
    const newTransferInfo = await NewTransferInfo.findByPk(req.params.id);
    if (!newTransferInfo) return res.status(404).json({ error: 'Transfer info not found' });

    await newTransferInfo.destroy();
    res.status(204).end();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


//not use