const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Rating = require('../models/Ratings');


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
    defaultValue: 'MICE',
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
    allowNull: true,
  },
  country: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  category: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  destination: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  mapUrl: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  packageContent: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
});

MICE.hasMany(Rating, {
  foreignKey: 'packageId',
  constraints: false,
  scope: {
    packageType: 'MICE',
  },
});
Rating.belongsTo(MICE, { foreignKey: 'packageId', constraints: false });


module.exports = MICE;
