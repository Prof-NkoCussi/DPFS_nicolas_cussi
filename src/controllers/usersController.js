// ============================================================
//  USHUAIA MUSICSTORE — controllers/usersController.js
//  Sprint 6 — Sequelize (MySQL)
// ============================================================

const bcrypt = require('bcrypt');
const { User } = require('../../database/models');

const controller = {

  // GET /users/register — Formulario registro
  register: (req, res) => {
    res.render('users/register', {
      title: 'Crear cuenta — Ushuaia MusicStore'
    });
  },

  // POST /users/register — Guardar nuevo usuario
  store: async (req, res) => {
    try {
      // Verificar si el email ya existe
      const emailExists = await User.findOne({ where: { email: req.body.email } });
      if (emailExists) {
        req.flash('error', 'El email ya está registrado.');
        return res.redirect('/users/register');
      }

      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      const image = req.file ? req.file.filename : 'user-default.png';

      await User.create({
        firstName: req.body.firstName,
        lastName:  req.body.lastName,
        email:     req.body.email,
        password:  hashedPassword,
        role:      'user',
        image
      });

      req.flash('success', '¡Cuenta creada con éxito! Ya podés iniciar sesión.');
      res.redirect('/users/login');

    } catch (error) {
      console.error(error);
      req.flash('error', 'Ocurrió un error al crear la cuenta. Intentá de nuevo.');
      res.redirect('/users/register');
    }
  },

  // GET /users/login — Formulario login
  login: (req, res) => {
    res.render('users/login', {
      title: 'Iniciar sesión — Ushuaia MusicStore'
    });
  },

  // POST /users/login — Procesar login
  authenticate: async (req, res) => {
    try {
      const user = await User.findOne({ where: { email: req.body.email } });
      if (!user) {
        req.flash('error', 'Email o contraseña incorrectos.');
        return res.redirect('/users/login');
      }

      const passwordMatch = await bcrypt.compare(req.body.password, user.password);
      if (!passwordMatch) {
        req.flash('error', 'Email o contraseña incorrectos.');
        return res.redirect('/users/login');
      }

      // Guardar en sesión (sin contraseña)
      req.session.userLogged = {
        id:        user.id,
        firstName: user.firstName,
        lastName:  user.lastName,
        email:     user.email,
        role:      user.role,
        image:     user.image
      };

      req.flash('success', `¡Bienvenido, ${user.firstName}!`);
      res.redirect('/');

    } catch (error) {
      console.error(error);
      req.flash('error', 'Ocurrió un error al iniciar sesión. Intentá de nuevo.');
      res.redirect('/users/login');
    }
  },

  // GET /users/logout — Cerrar sesión
  logout: (req, res) => {
    req.session.destroy();
    res.redirect('/users/login');
  },

  // GET /users/profile — Perfil del usuario
  profile: (req, res) => {
    res.render('users/profile', {
      title: 'Mi perfil — Ushuaia MusicStore'
    });
  }

};

module.exports = controller;
