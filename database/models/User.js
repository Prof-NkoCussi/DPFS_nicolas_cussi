// database/models/User.js

const { DataTypes } = require('sequelize');
const sequelize     = require('../config');

const User = sequelize.define('User', {
  id: {
    type:          DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey:    true,
  },
  firstName: {
    type:      DataTypes.STRING(100),
    allowNull: false,
  },
  lastName: {
    type:      DataTypes.STRING(100),
    allowNull: false,
  },
  email: {
    type:      DataTypes.STRING(150),
    allowNull: false,
    unique:    true,
  },
  password: {
    type:      DataTypes.STRING(255),
    allowNull: false,
  },
  image: {
    type:         DataTypes.STRING(255),
    allowNull:    true,
    defaultValue: 'default-user.png',
  },
  role: {
    type:         DataTypes.ENUM('admin', 'user'),
    allowNull:    false,
    defaultValue: 'user',
  },
}, {
  tableName:  'users',
  timestamps: true,
});

module.exports = User;
