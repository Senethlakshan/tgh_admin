const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const UserRequest = sequelize.define('UserRequest', {
  requestId: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  requestType: {
    type: DataTypes.STRING, // e.g., "comment", "question", "feedback"
    allowNull: false,
  },
  message: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING, // e.g., "new", "in_progress", "resolved"
    defaultValue: 'new',
  },
  response: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
}, {
  timestamps: true, // Automatically add createdAt and updatedAt
});

module.exports = UserRequest;
