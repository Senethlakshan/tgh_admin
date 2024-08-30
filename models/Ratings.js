const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Rating = sequelize.define('Rating', {
  packageId: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  packageType: {
    type: DataTypes.STRING, // This will store 'MICE', 'ThingsToDo', etc.
    allowNull: false,
  },
  rating: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: { min: 1, max: 5 },
  },
  reviews: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
});

module.exports = Rating;
