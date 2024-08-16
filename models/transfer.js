const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Transfer = sequelize.define('Transfer', {
  packageId: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    defaultValue: () => 'transfer' + Math.floor(1000 + Math.random() * 9000), // Generates a packageId with 'transfer' prefix and a random 4-digit number
  },
  packageType: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'transfer', // Default value 'transfer'
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  coverPhoto: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  prices: {
    type: DataTypes.JSON, // Store prices as JSON
    allowNull: false,
  },
});

module.exports = Transfer;
