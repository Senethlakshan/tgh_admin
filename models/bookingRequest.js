const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const User = require('./user');  // Import the User model

const BookingRequest = sequelize.define('BookingRequest', {
  requestId: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    defaultValue: () => 'REQ' + Math.floor(1000 + Math.random() * 9000),  // Generate a unique request ID
  },
  packageId: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  packageType: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM('pending', 'proceed', 'complete'),
    allowNull: false,
    defaultValue: 'pending',  // Default status is 'pending'
  },
  userId: {
    type: DataTypes.INTEGER,
    references: {
      model: User,
      key: 'id',
    },
  },
});

module.exports = BookingRequest;
