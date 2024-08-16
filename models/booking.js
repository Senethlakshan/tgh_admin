const { DataTypes } = require('sequelize');
const sequelize = require('../config/db'); // Your database configuration

const Booking = sequelize.define('Booking', {
  bookingId: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    defaultValue: () => 'Booking' + Math.floor(1000 + Math.random() * 9000), // Generates a bookingId with 'Booking' prefix and a random 4-digit number
  },
  packageType: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  packageTitle: {
    type: DataTypes.STRING,
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
  bookingStatus: {
    type: DataTypes.ENUM('pending', 'process', 'completed', 'reject'),
    allowNull: false,
    defaultValue: 'pending', // Default status
  },
  bookingDate: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
  numberOfPeople: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  totalCost: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  specialRequests: {
    type: DataTypes.TEXT,
    allowNull: true,
  }
});

module.exports = Booking;
