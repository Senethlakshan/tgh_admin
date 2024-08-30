// models/discountInfo.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const { v4: uuidv4 } = require('uuid');

const DiscountInfo = sequelize.define('DiscountInfo', {
  id: {
    type: DataTypes.UUID,
    defaultValue: uuidv4,
    primaryKey: true,
  },
  rate: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  minimumPurchaseAmount: {
    type: DataTypes.FLOAT,
    allowNull: true,
  },
  validFrom: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  validTo: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  excludedCategories: {
    type: DataTypes.JSON,  // Storing array as JSON
    allowNull: true,
  },
});

module.exports = DiscountInfo;
