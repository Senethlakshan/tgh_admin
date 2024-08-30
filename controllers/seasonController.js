// controllers/seasonController.js
const Season = require('../models/Season');

// Create a new season
exports.createSeason = async (req, res) => {
  try {
    const { seasonName, startDate, endDate, rates } = req.body;

    const newSeason = await Season.create({ seasonName, startDate, endDate, rates });
    res.status(201).json(newSeason);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a season by ID
exports.getSeasonById = async (req, res) => {
  try {
    const season = await Season.findByPk(req.params.id);
    if (!season) {
      return res.status(404).json({ message: 'Season not found' });
    }
    res.status(200).json(season);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a season
exports.updateSeason = async (req, res) => {
  try {
    const { seasonName, startDate, endDate, rates } = req.body;
    const season = await Season.findByPk(req.params.id);

    if (!season) {
      return res.status(404).json({ message: 'Season not found' });
    }

    season.seasonName = seasonName || season.seasonName;
    season.startDate = startDate || season.startDate;
    season.endDate = endDate || season.endDate;
    season.rates = rates || season.rates;

    await season.save();
    res.status(200).json(season);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a season
exports.deleteSeason = async (req, res) => {
  try {
    const season = await Season.findByPk(req.params.id);

    if (!season) {
      return res.status(404).json({ message: 'Season not found' });
    }

    await season.destroy();
    res.status(200).json({ message: 'Season deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all seasons
exports.getAllSeasons = async (req, res) => {
  try {
    const seasons = await Season.findAll();
    res.status(200).json(seasons);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
