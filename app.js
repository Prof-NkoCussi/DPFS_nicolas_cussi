// ============================================================
//  USHUAIA MUSICSTORE — app.js
//  Servidor principal Express
// ============================================================

// Le dice a Express que use EJS como motor de templates
//app.set('view engine', 'ejs');

// Le dice dónde están las vistas
//app.set('views', path.join(__dirname, 'src/views'));

// Sirve CSS, imágenes y JS desde la carpeta public/
//app.use(express.static(...));

// Importa las rutas
//app.use('/', indexRouter); 
//app.use('/products', productsRouter);
//app.use('/users', usersRouter);

// Inicia el servidor en el puerto 3000
//app.listen(3000, ...);

require('dotenv').config();

const express        = require('express');
const path           = require('path');
const methodOverride = require('method-override');
const session        = require('express-session');
const flash          = require('connect-flash');

const app  = express();
const PORT = 3000;

// ── Motor de templates ───────────────────────────────────────
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src/views'));

// ── Archivos estáticos (CSS, imágenes, JS) ───────────────────
app.use(express.static(path.join(__dirname, 'public')));

// ── Middlewares para formularios ─────────────────────────────
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ── Method Override (permite PUT y DELETE desde formularios HTML)
app.use(methodOverride('_method'));

// ── Sesiones ─────────────────────────────────────────────────
app.use(session({
  secret: process.env.SESSION_SECRET || 'ushuaia-music-secret',
  resave: false,
  saveUninitialized: false
}));

// ── Flash messages ───────────────────────────────────────────
app.use(flash());

// ── Variables globales para todas las vistas ─────────────────
app.use((req, res, next) => {
  res.locals.userLogged = req.session.userLogged || null;
  res.locals.successMsg = req.flash('success');
  res.locals.errorMsg   = req.flash('error');
  const cart = req.session.cart || [];
  res.locals.cartCount  = cart.reduce((sum, item) => sum + item.quantity, 0);
  next();
});

// ── Rutas ────────────────────────────────────────────────────
const indexRouter    = require('./src/routes/index');
const productsRouter = require('./src/routes/products');
const usersRouter    = require('./src/routes/users');

app.use('/',         indexRouter);
app.use('/products', productsRouter);
app.use('/users',    usersRouter);

// ── Manejo de errores 404 ────────────────────────────────────
app.use((req, res) => {
  res.status(404).send('Página no encontrada');
});

// ── Iniciar servidor ─────────────────────────────────────────
const { sequelize } = require('./database/models');

sequelize.authenticate()
  .then(() => {
    console.log('✅ Conexión a MySQL exitosa');
    app.listen(PORT, () => {
      console.log(`✅ Servidor corriendo en http://localhost:${PORT}`);
    });
  })
  .catch(err => {
    console.error('❌ Error al conectar con MySQL:', err.message);
  });

module.exports = app;