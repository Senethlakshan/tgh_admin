const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const ThingsToDo = sequelize.define('ThingsToDo', {
  packageId: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    defaultValue: () => 'thingstodo' + Math.floor(1000 + Math.random() * 9000), // Generates a packageId with 'thingstodo' prefix and a random 4-digit number
  },
  packageType: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'thingstodo', // Default value 'thingstodo'
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
  prices: {
    type: DataTypes.JSON, // Store prices as JSON
    allowNull: false,
  },
});

module.exports = ThingsToDo;
