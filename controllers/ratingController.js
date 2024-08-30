const Rating = require('../models/Ratings');

exports.createRating = async (req, res) => {
  try {
    const { packageId, packageType, rating, reviews } = req.body;
    const newRating = await Rating.create({ packageId, packageType, rating, reviews });
    res.status(201).json(newRating);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAllRatings = async (req, res) => {
  try {
    const ratings = await Rating.findAll();
    res.status(200).json(ratings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getRatingById = async (req, res) => {
  try {
    const rating = await Rating.findByPk(req.params.id);
    if (!rating) return res.status(404).json({ error: 'Rating not found' });
    res.status(200).json(rating);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateRating = async (req, res) => {
  try {
    const { rating, reviews } = req.body;
    const ratingToUpdate = await Rating.findByPk(req.params.id);
    if (!ratingToUpdate) return res.status(404).json({ error: 'Rating not found' });

    ratingToUpdate.rating = rating;
    ratingToUpdate.reviews = reviews;

    await ratingToUpdate.save();
    res.status(200).json(ratingToUpdate);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteRating = async (req, res) => {
  try {
    const rating = await Rating.findByPk(req.params.id);
    if (!rating) return res.status(404).json({ error: 'Rating not found' });

    await rating.destroy();
    res.status(204).end();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};




exports.getRatingsByPackageId = async (req, res) => {
  try {
    const { packageId } = req.params;
    const ratings = await Rating.findAll({
      where: { packageId },
      order: [['createdAt', 'DESC']] // Change to ['reviews', 'ASC'] if you want to sort by reviews
    });
    if (!ratings.length) return res.status(404).json({ error: 'No ratings found for this packageId' });
    res.status(200).json(ratings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};