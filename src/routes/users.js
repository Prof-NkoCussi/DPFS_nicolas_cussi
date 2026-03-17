// ============================================================
//  USHUAIA MUSICSTORE — routes/users.js
// ============================================================

const express    = require('express');
const router     = express.Router();
const controller = require('../controllers/usersController');

// GET  /users/register  — Formulario registro
router.get('/register',  controller.register);

// POST /users/register  — Guardar nuevo usuario
router.post('/register', controller.store);

// GET  /users/login     — Formulario login
router.get('/login',     controller.login);

// POST /users/login     — Procesar login
router.post('/login',    controller.authenticate);

// GET  /users/logout    — Cerrar sesión
router.get('/logout',    controller.logout);

// GET  /users/profile   — Perfil del usuario
router.get('/profile',   controller.profile);

module.exports = router;