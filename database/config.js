// database/config.js
// Configuración de conexión a MySQL con Sequelize

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  process.env.DB_NAME     || 'ushuaia_musicstore',
  process.env.DB_USER     || 'root',
  process.env.DB_PASSWORD || '',
  {
    host:    process.env.DB_HOST || 'localhost',
    dialect: 'mysql',
    logging: false, // en true muestra las queries SQL en consola
  }
);

module.exports = sequelize;
