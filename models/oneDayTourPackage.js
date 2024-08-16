const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const OneDayTourPackage = sequelize.define('OneDayTourPackage', {
  packageId: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    defaultValue: () => 'OneDay' + Math.floor(1000 + Math.random() * 9000), // Generates a packageId with 'OneDay' prefix and a random 4-digit number
  },
  packageType: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'OneDay', // Default value 'OneDay'
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  coverPhoto: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  mainPhoto: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  benefits: {
    type: DataTypes.JSON, // Store benefits as JSON
    allowNull: true,
  },
  packageDescription: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  activities: {
    type: DataTypes.JSON, // Store activities as JSON
    allowNull: true,
  },
  mapUrl: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  subPhotos: {
    type: DataTypes.JSON, // Store sub-photos as an array of URLs
    allowNull: true,
  },
  packageDetails: {
    type: DataTypes.JSON, // Store package details as JSON
    allowNull: true,
  },
  otherData: {
    type: DataTypes.JSON, // Store other data as JSON
    allowNull: true,
  }
});

module.exports = OneDayTourPackage;
