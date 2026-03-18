// database/models/Product.js

const { DataTypes } = require('sequelize');
const sequelize     = require('../config');

const Product = sequelize.define('Product', {
  id: {
    type:          DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey:    true,
  },
  name: {
    type:      DataTypes.STRING(150),
    allowNull: false,
  },
  description: {
    type:      DataTypes.TEXT,
    allowNull: true,
  },
  price: {
    type:      DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  image: {
    type:         DataTypes.STRING(255),
    allowNull:    true,
    defaultValue: null,
  },
  colors: {
    type:         DataTypes.STRING(255),
    allowNull:    true,
    defaultValue: null,
    get() {
      const value = this.getDataValue('colors');
      if (!value) return [];
      if (Array.isArray(value)) return value;
      return value.split(',').map(c => c.trim());
    }
  },
  stock: {
    type:         DataTypes.INTEGER,
    allowNull:    false,
    defaultValue: 0,
  },
  category_id: {
    type:      DataTypes.INTEGER,
    allowNull: true,
  },
}, {
  tableName:  'products',
  timestamps: true,
});

module.exports = Product;
