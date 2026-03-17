// ============================================================
//  USHUAIA MUSICSTORE — routes/products.js
// ============================================================

const express    = require('express');
const router     = express.Router();
const controller = require('../controllers/productsController');

// GET /products         — Listado de productos
router.get('/',           controller.list);

// GET /products/cart    — Carrito de compras  ⚠️ debe ir ANTES de /:id
router.get('/cart',       controller.cart);

// GET /products/create  — Formulario crear producto
router.get('/create',     controller.create);

// POST /products        — Guardar nuevo producto
router.post('/',          controller.store);

// GET /products/:id     — Detalle de producto
router.get('/:id',        controller.detail);

// GET /products/:id/edit — Formulario editar producto
router.get('/:id/edit',   controller.edit);

// PUT /products/:id     — Actualizar producto
router.put('/:id',        controller.update);

// DELETE /products/:id  — Eliminar producto
router.delete('/:id',     controller.destroy);

module.exports = router;