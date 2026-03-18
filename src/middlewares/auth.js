// ============================================================
//  USHUAIA MUSICSTORE — middlewares/auth.js
//  Middlewares de autenticación para rutas protegidas
// ============================================================

// Solo para guests (sin sesión)
// Si ya hay sesión activa → redirige al perfil
const isGuest = (req, res, next) => {
  if (req.session.userLogged) {
    return res.redirect('/users/profile');
  }
  next();
};

// Solo para usuarios logueados
// Si no hay sesión → redirige al login
const isUser = (req, res, next) => {
  if (!req.session.userLogged) {
    req.flash('error', 'Debés iniciar sesión para acceder a esa página.');
    return res.redirect('/users/login');
  }
  next();
};

// Solo para administradores
// Si no es admin → redirige al home
const isAdmin = (req, res, next) => {
  const user = req.session.userLogged;
  const role = user?.role || user?.category;
  if (!user || role !== 'admin') {
    req.flash('error', 'No tenés permisos para acceder a esa sección.');
    return res.redirect('/');
  }
  next();
};

module.exports = { isGuest, isUser, isAdmin };
