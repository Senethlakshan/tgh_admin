const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const MICE = sequelize.define('MICE', {
  packageId: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    defaultValue: () => 'MICE' + Math.floor(1000 + Math.random() * 9000), // Generates a packageId with 'MICE' prefix and a random 4-digit number
  },
  packageType: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'MICE', // Default value 'MICE'
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
});

module.exports = MICE;
