// ============================================================
//  USHUAIA MUSICSTORE — routes/index.js
// ============================================================

const express    = require('express');
const router     = express.Router();
const controller = require('../controllers/indexController');

// GET / — Home
router.get('/', controller.index);

// GET /contact — Contacto
router.get('/contact', (_req, res) => {
  res.render('contact', { title: 'Contacto — Ushuaia MusicStore' });
});

module.exports = router;