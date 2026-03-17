// ============================================================
//  USHUAIA MUSICSTORE — middlewares/multerConfig.js
//  Configuración de Multer para subida de imágenes de usuarios
// ============================================================

const multer = require('multer');
const path   = require('path');

// Define dónde y con qué nombre se guarda el archivo
const storage = multer.diskStorage({

  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '../../public/images/users'));
  },

  filename: (req, file, cb) => {
    // Nombre único: timestamp + extensión original
    // Ej: 1710000000000.jpg
    const ext = path.extname(file.originalname);
    cb(null, Date.now() + ext);
  }

});

// Filtro: solo acepta imágenes JPG, JPEG, PNG y GIF
const fileFilter = (req, file, cb) => {
  const allowed = /jpeg|jpg|png|gif/;
  const isValid = allowed.test(path.extname(file.originalname).toLowerCase());
  if (isValid) {
    cb(null, true);
  } else {
    cb(new Error('Solo se permiten imágenes JPG, JPEG, PNG o GIF'));
  }
};

const upload = multer({ storage, fileFilter });

module.exports = upload;
