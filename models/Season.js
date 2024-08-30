// models/season.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Season = sequelize.define('Season', {
  seasonId: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  seasonName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  startDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  endDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  rates: {
    type: DataTypes.FLOAT,
    allowNull: true,
  },
});

module.exports = Season;
