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
  numberOfPaxCount: {
    type: DataTypes.JSON,
    allowNull: false,
    
  },
  packageDetails: {
    type: DataTypes.JSON,
    allowNull: true
  },
  country: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  destination: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  startLocation: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  endLocation: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  pickupLocation: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  remarks: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  invoiceAmount: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  paymentId: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  paymentMethod: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  paymentStatus: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  amountPaid: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  paymentDate: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  bookingStatus: {
    type: DataTypes.ENUM('pending', 'process', 'completed', 'reject'),
    allowNull: false,
    defaultValue: 'pending',
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  }
});

module.exports = Booking;
