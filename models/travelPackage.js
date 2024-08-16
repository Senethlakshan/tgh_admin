const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const TravelPackage = sequelize.define('TravelPackage', {
  Pkgtype: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'multiday'
  },
  duration: {
    type: DataTypes.STRING,
    allowNull: false
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  coverPhoto: {
    type: DataTypes.STRING,
    allowNull: true
  },
  mainPhoto: {
    type: DataTypes.STRING,
    allowNull: true
  },
  subPhotos: {
    type: DataTypes.JSON, // Array of URLs
    allowNull: true
  },
  itinerary: {
    type: DataTypes.JSON, // JSON object for itinerary details
    allowNull: true
  },
  includes: {
    type: DataTypes.JSON, // JSON object for included items
    allowNull: true
  },
  excludes: {
    type: DataTypes.JSON, // JSON object for excluded items
    allowNull: true
  },
  packageDetails: {
    type: DataTypes.JSON, // JSON object for package details
    allowNull: true
  },
  otherData: {
    type: DataTypes.JSON, // JSON object for additional data
    allowNull: true
  },
  mapUrl: {
    type: DataTypes.STRING,
    allowNull: true
  },
  configuration: {
    type: DataTypes.JSON, // JSON object for configuration details
    allowNull: true
  }
});

module.exports = TravelPackage;
