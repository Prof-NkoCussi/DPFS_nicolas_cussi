// ============================================================
//  USHUAIA MUSICSTORE — routes/products.js
// ============================================================

const express              = require('express');
const router               = express.Router();
const controller           = require('../controllers/productsController');
const { isAdmin } = require('../middlewares/auth');

// GET /products         — Público
router.get('/',              controller.list);

// GET /products/cart    — Público ⚠️ antes de /:id
router.get('/cart',          controller.cart);

// GET /products/create  — Solo admin
router.get('/create',        isAdmin, controller.create);

// POST /products        — Solo admin
router.post('/',             isAdmin, controller.store);

// GET /products/:id     — Público
router.get('/:id',           controller.detail);

// GET /products/:id/edit — Solo admin
router.get('/:id/edit',      isAdmin, controller.edit);

// PUT /products/:id     — Solo admin
router.put('/:id',           isAdmin, controller.update);

// DELETE /products/:id  — Solo admin
router.delete('/:id',        isAdmin, controller.destroy);

module.exports = router;