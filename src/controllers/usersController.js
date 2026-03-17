// ============================================================
//  USHUAIA MUSICSTORE — controllers/usersController.js
// ============================================================

const controller = {

  // GET /users/register — Formulario registro
  register: (req, res) => {
    res.render('users/register', {
      title: 'Crear cuenta — Ushuaia MusicStore'
    });
  },

  // POST /users/register — Guardar nuevo usuario
  store: (req, res) => {
    // En Sprint 5 se guarda en JSON con bcrypt
    res.redirect('/users/login');
  },

  // GET /users/login — Formulario login
  login: (req, res) => {
    res.render('users/login', {
      title: 'Iniciar sesión — Ushuaia MusicStore'
    });
  },

  // POST /users/login — Procesar login
  authenticate: (req, res) => {
    // En Sprint 5 se valida con bcrypt y sesiones
    res.redirect('/');
  },

  // GET /users/logout — Cerrar sesión
  logout: (req, res) => {
    // En Sprint 5 se destruye la sesión
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