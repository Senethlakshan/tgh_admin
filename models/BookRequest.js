const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const BookRequest = sequelize.define('BookRequest', {
  bookRequestId: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    defaultValue: () => 'Request' + Math.floor(1000 + Math.random() * 9000),
  },
  country: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  packageType: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  packageTitle: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  PackageDetails: {
    type: DataTypes.JSON,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  contact_number: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  requestDetails: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  remarks: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  }
});

module.exports = BookRequest;
