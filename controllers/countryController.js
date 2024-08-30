const Country = require('../models/Country');
const path = require('path');
const fs = require('fs');

// Create a new country
exports.createCountry = async (req, res) => {
  try {
    const { countryName, description, locationDetails } = req.body;
    let flag = null;

    if (req.file) {
      flag = req.file.filename;
    }

    const newCountry = await Country.create({ 
      countryName, 
      flag, 
      description, 
      locationDetails 
    });
    res.status(201).json(newCountry);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a country by ID
exports.getCountryById = async (req, res) => {
  try {
    const country = await Country.findByPk(req.params.id);
    if (!country) {
      return res.status(404).json({ message: 'Country not found' });
    }
    res.status(200).json(country);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a country
exports.updateCountry = async (req, res) => {
  try {
    const { countryName, description, locationDetails } = req.body;
    const country = await Country.findByPk(req.params.id);
    
    if (!country) {
      return res.status(404).json({ message: 'Country not found' });
    }

    if (req.file) {
      // Delete old flag file if it exists
      if (country.flag) {
        fs.unlinkSync(path.join(__dirname, '../blogUploads/', country.flag));
      }
      country.flag = req.file.filename;
    }

    country.countryName = countryName || country.countryName;
    country.description = description || country.description;
    country.locationDetails = locationDetails || country.locationDetails;
    await country.save();

    res.status(200).json(country);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a country
exports.deleteCountry = async (req, res) => {
  try {
    const country = await Country.findByPk(req.params.id);

    if (!country) {
      return res.status(404).json({ message: 'Country not found' });
    }

    // Delete flag file if it exists
    if (country.flag) {
      fs.unlinkSync(path.join(__dirname, '../blogUploads/', country.flag));
    }

    await country.destroy();
    res.status(200).json({ message: 'Country deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all countries
exports.getAllCountries = async (req, res) => {
  try {
    const countries = await Country.findAll();
    res.status(200).json(countries);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


// Get countries by name
exports.getCountriesByName = async (req, res) => {
  try {
    const { countryName } = req.params;
    const countries = await Country.findAll({
      where: {
        countryName: countryName
      }
    });

    if (!countries.length) {
      return res.status(404).json({ message: 'No countries found with that name' });
    }

    res.status(200).json(countries);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
