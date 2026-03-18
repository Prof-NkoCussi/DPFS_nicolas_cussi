// ============================================================
//  USHUAIA MUSICSTORE — middlewares/validations.js
//  Sprint 7 — Validaciones con express-validator
// ============================================================

const { body } = require('express-validator');

// ── Registro de usuarios ─────────────────────────────────────
const registerValidations = [
  body('firstName')
    .trim()
    .notEmpty().withMessage('El nombre es obligatorio.')
    .isLength({ min: 2 }).withMessage('El nombre debe tener al menos 2 caracteres.'),

  body('lastName')
    .trim()
    .notEmpty().withMessage('El apellido es obligatorio.')
    .isLength({ min: 2 }).withMessage('El apellido debe tener al menos 2 caracteres.'),

  body('email')
    .trim()
    .notEmpty().withMessage('El email es obligatorio.')
    .isEmail().withMessage('El email no tiene un formato válido.'),

  body('password')
    .notEmpty().withMessage('La contraseña es obligatoria.')
    .isLength({ min: 8 }).withMessage('La contraseña debe tener al menos 8 caracteres.')
];

// ── Login de usuarios ─────────────────────────────────────────
const loginValidations = [
  body('email')
    .trim()
    .notEmpty().withMessage('El email es obligatorio.')
    .isEmail().withMessage('El email no tiene un formato válido.'),

  body('password')
    .notEmpty().withMessage('La contraseña es obligatoria.')
];

// ── Productos ─────────────────────────────────────────────────
const productValidations = [
  body('name')
    .trim()
    .notEmpty().withMessage('El nombre del producto es obligatorio.')
    .isLength({ min: 5 }).withMessage('El nombre debe tener al menos 5 caracteres.'),

  body('description')
    .trim()
    .notEmpty().withMessage('La descripción es obligatoria.')
    .isLength({ min: 20 }).withMessage('La descripción debe tener al menos 20 caracteres.'),

  body('price')
    .notEmpty().withMessage('El precio es obligatorio.')
    .isFloat({ min: 0.01 }).withMessage('El precio debe ser un número mayor a 0.')
];

module.exports = { registerValidations, loginValidations, productValidations };
