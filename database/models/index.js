// database/models/index.js
// Punto central — importa modelos y define relaciones (associations)

const sequelize = require('../config');
const Category  = require('./Category');
const Product   = require('./Product');
const User      = require('./User');

// Una categoría tiene muchos productos
Category.hasMany(Product, { foreignKey: 'category_id', as: 'products' });

// Un producto pertenece a una categoría
Product.belongsTo(Category, { foreignKey: 'category_id', as: 'category' });

module.exports = { sequelize, Category, Product, User };
