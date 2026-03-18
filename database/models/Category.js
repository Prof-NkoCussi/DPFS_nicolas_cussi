// database/models/Category.js

const { DataTypes } = require('sequelize');
const sequelize     = require('../config');

const Category = sequelize.define('Category', {
  id: {
    type:          DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey:    true,
  },
  name: {
    type:      DataTypes.STRING(100),
    allowNull: false,
    unique:    true,
  },
  description: {
    type:         DataTypes.STRING(255),
    allowNull:    true,
    defaultValue: null,
  },
}, {
  tableName:  'categories',
  timestamps: false,
});

module.exports = Category;
