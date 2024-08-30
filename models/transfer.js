const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Rating = require('../models/Ratings');

const Transfer = sequelize.define('Transfer', {
  packageId: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    defaultValue: () => 'transfer' + Math.floor(1000 + Math.random() * 9000),
  },
  packageType: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'transfer',
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
  fromLocation: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  toLocation: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

// In Transfer model file
Transfer.hasMany(Rating, {
  foreignKey: 'packageId',
  constraints: false,
  scope: {
    packageType: 'transfer',
  },
});
Rating.belongsTo(Transfer, { foreignKey: 'packageId', constraints: false });


module.exports = Transfer;
