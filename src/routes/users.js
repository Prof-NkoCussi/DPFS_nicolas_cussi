// ============================================================
//  USHUAIA MUSICSTORE — routes/users.js
// ============================================================

const express    = require('express');
const router     = express.Router();
const controller = require('../controllers/usersController');
const upload     = require('../middlewares/multerConfig');
const { isGuest, isUser } = require('../middlewares/auth');

// GET  /users/register  — Solo guests (si ya hay sesión → perfil)
router.get('/register',  isGuest, controller.register);

// POST /users/register  — Solo guests + subida de imagen
router.post('/register', isGuest, upload.single('image'), controller.store);

// GET  /users/login     — Solo guests
router.get('/login',     isGuest, controller.login);

// POST /users/login     — Solo guests
router.post('/login',    isGuest, controller.authenticate);

// GET  /users/logout    — Solo usuarios logueados
router.get('/logout',    isUser, controller.logout);

// GET  /users/profile   — Solo usuarios logueados
router.get('/profile',   isUser, controller.profile);

module.exports = router;