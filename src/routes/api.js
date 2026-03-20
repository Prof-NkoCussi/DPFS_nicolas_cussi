const express = require('express');
const router = express.Router();
const apiController = require('../controllers/apiController');

// Usuarios
router.get('/users', apiController.getUsers);
router.get('/users/:id', apiController.getUserById);

// Productos
router.get('/products', apiController.getProducts);
router.get('/products/:id', apiController.getProductById);

module.exports = router;
