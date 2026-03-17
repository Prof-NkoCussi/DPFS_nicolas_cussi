// ============================================================
//  USHUAIA MUSICSTORE — controllers/usersController.js
// ============================================================

const fs     = require('fs');
const path   = require('path');
const bcrypt = require('bcrypt');

// Ruta al archivo JSON de usuarios
const usersFilePath = path.join(__dirname, '../../data/users.json');

// Lee y devuelve el array de usuarios desde el JSON
function getUsers() {
  const data = fs.readFileSync(usersFilePath, 'utf-8');
  return JSON.parse(data);
}

// Guarda el array de usuarios en el JSON
function saveUsers(users) {
  fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2), 'utf-8');
}

// ----------------------------------------------------------------

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
      const users = getUsers();

      // Verificar si el email ya existe
      const emailExists = users.find(u => u.email === req.body.email);
      if (emailExists) {
        req.flash('error', 'El email ya está registrado.');
        return res.redirect('/users/register');
      }

      // Encriptar la contraseña (10 = nivel de seguridad)
      const hashedPassword = await bcrypt.hash(req.body.password, 10);

      // Nombre del archivo de imagen subido por Multer (o default)
      const image = req.file ? req.file.filename : 'user-default.png';

      // Crear el nuevo usuario
      const newUser = {
        id: users.length > 0 ? users[users.length - 1].id + 1 : 1,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: hashedPassword,
        category: 'user',
        image
      };

      users.push(newUser);
      saveUsers(users);

      req.flash('success', '¡Cuenta creada con éxito! Ya podés iniciar sesión.');
      res.redirect('/users/login');

    } catch (error) {
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
      const users = getUsers();

      // Buscar usuario por email
      const user = users.find(u => u.email === req.body.email);
      if (!user) {
        req.flash('error', 'Email o contraseña incorrectos.');
        return res.redirect('/users/login');
      }

      // Comparar contraseña ingresada con la encriptada
      const passwordMatch = await bcrypt.compare(req.body.password, user.password);
      if (!passwordMatch) {
        req.flash('error', 'Email o contraseña incorrectos.');
        return res.redirect('/users/login');
      }

      // Guardar usuario en sesión (sin la contraseña)
      req.session.userLogged = {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        category: user.category,
        image: user.image
      };

      req.flash('success', `¡Bienvenido, ${user.firstName}!`);
      res.redirect('/');

    } catch (error) {
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
