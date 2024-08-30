// controllers/discountInfoController.js
const DiscountInfo = require('../models/DiscountInfo');

// Create a new discount info
exports.createDiscountInfo = async (req, res) => {
  try {
    const { rate, description, minimumPurchaseAmount, validFrom, validTo, excludedCategories } = req.body;

    const newDiscountInfo = await DiscountInfo.create({ rate, description, minimumPurchaseAmount, validFrom, validTo, excludedCategories });
    res.status(201).json(newDiscountInfo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a discount info by ID
exports.getDiscountInfoById = async (req, res) => {
  try {
    const discountInfo = await DiscountInfo.findByPk(req.params.id);
    if (!discountInfo) {
      return res.status(404).json({ message: 'Discount info not found' });
    }
    res.status(200).json(discountInfo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a discount info
exports.updateDiscountInfo = async (req, res) => {
  try {
    const { rate, description, minimumPurchaseAmount, validFrom, validTo, excludedCategories } = req.body;
    const discountInfo = await DiscountInfo.findByPk(req.params.id);

    if (!discountInfo) {
      return res.status(404).json({ message: 'Discount info not found' });
    }

    discountInfo.rate = rate || discountInfo.rate;
    discountInfo.description = description || discountInfo.description;
    discountInfo.minimumPurchaseAmount = minimumPurchaseAmount || discountInfo.minimumPurchaseAmount;
    discountInfo.validFrom = validFrom || discountInfo.validFrom;
    discountInfo.validTo = validTo || discountInfo.validTo;
    discountInfo.excludedCategories = excludedCategories || discountInfo.excludedCategories;

    await discountInfo.save();
    res.status(200).json(discountInfo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a discount info
exports.deleteDiscountInfo = async (req, res) => {
  try {
    const discountInfo = await DiscountInfo.findByPk(req.params.id);

    if (!discountInfo) {
      return res.status(404).json({ message: 'Discount info not found' });
    }

    await discountInfo.destroy();
    res.status(200).json({ message: 'Discount info deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all discount infos
exports.getAllDiscountInfos = async (req, res) => {
  try {
    const discountInfos = await DiscountInfo.findAll();
    res.status(200).json(discountInfos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
