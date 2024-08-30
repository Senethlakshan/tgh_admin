const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Rating = require('../models/Ratings');

const ThingsToDo = sequelize.define('ThingsToDo', {
  packageId: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    defaultValue: () => 'thingstodo' + Math.floor(1000 + Math.random() * 9000), 
  },
  packageType: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'thingstodo', 
  },
  title: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  coverPhoto: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  prices: {
    type: DataTypes.JSON, 
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
    allowNull: false,
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

ThingsToDo.hasMany(Rating, {
  foreignKey: 'packageId',
  constraints: false,
  scope: {
    packageType: 'ThingsToDo',
  },
});
Rating.belongsTo(ThingsToDo, { foreignKey: 'packageId', constraints: false });

module.exports = ThingsToDo;
