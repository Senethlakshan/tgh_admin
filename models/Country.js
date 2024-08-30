const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Country = sequelize.define('Country', {
  countryId: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  countryName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  flag: {
    type: DataTypes.STRING, 
    allowNull: true,
  },
  description: {
    type: DataTypes.TEXT, 
    allowNull: true,
  },
  locationDetails: {
    type: DataTypes.JSON, 
    allowNull: true,
  },
});

module.exports = Country;
