//multiday tours

const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Rating = require('../models/Ratings');

const TravelPackage = sequelize.define('TravelPackage', {
  Pkgtype: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'multiday'
  },
  duration: {
    type: DataTypes.STRING,
    allowNull: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  coverPhoto: {
    type: DataTypes.STRING,
    allowNull: true
  },
  mainPhoto: {
    type: DataTypes.STRING,
    allowNull: true
  },
  subPhotos: {
    type: DataTypes.JSON, // Array of URLs
    allowNull: true
  },
  itinerary: {
    type: DataTypes.JSON, // JSON object for itinerary details
    allowNull: true
  },
  includes: {
    type: DataTypes.JSON, // JSON object for included items
    allowNull: true
  },
  excludes: {
    type: DataTypes.JSON, // JSON object for excluded items
    allowNull: true
  },
  packageDetails: {
    type: DataTypes.JSON, // JSON object for package details
    allowNull: true
  },
  otherData: {
    type: DataTypes.JSON, // JSON object for additional data
    allowNull: true
  },
  mapUrl: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  configuration: {
    type: DataTypes.JSON, // JSON object for configuration details
    allowNull: true
  },
  country: {
    type: DataTypes.STRING,
    allowNull: true
  },
  category: {
    type: DataTypes.STRING,
    allowNull: true
  },
  destination: {
    type: DataTypes.STRING,
    allowNull: true
  },
  startLocation: {
    type: DataTypes.STRING,
    allowNull: true
  },
  endLocation: {
    type: DataTypes.STRING,
    allowNull: true
  },
  discountRates: {
    type: DataTypes.JSON, // JSON object for discount rates
    allowNull: true
  },
  totalAmount: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: true
  },
  discountAmount: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: true
  },
  requestTobookingOption: {
    type: DataTypes.STRING,
    allowNull: true,
    defaultValue: 'N'
  },
  bookingStartDate: {
    type: DataTypes.DATE,
    allowNull: true
  },
  BookingNotAvaibleOption: {
    type: DataTypes.STRING,
    allowNull: true,
    defaultValue: 'N'
  }
});


// In multiday model file
TravelPackage.hasMany(Rating, {
  foreignKey: 'packageId',
  constraints: false,
  scope: {
    packageType: 'multiday',
  },
});
Rating.belongsTo(TravelPackage, { foreignKey: 'packageId', constraints: false });

module.exports = TravelPackage;








