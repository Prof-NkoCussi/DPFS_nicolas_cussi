// ============================================================
//  USHUAIA MUSICSTORE — controllers/productsController.js
// ============================================================

const fs   = require('fs');
const path = require('path');

// Ruta al archivo JSON de productos
const productsFilePath = path.join(__dirname, '../../data/products.json');

// Lee y devuelve el array de productos desde el JSON
function getProducts() {
  const data = fs.readFileSync(productsFilePath, 'utf-8');
  return JSON.parse(data);
}

// Guarda el array de productos en el JSON
function saveProducts(products) {
  fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 2), 'utf-8');
}

// ----------------------------------------------------------------

const controller = {

  // GET /products — Listado de productos
  list: (req, res) => {
    const products = getProducts();
    res.render('products/list', {
      title: 'Productos — Ushuaia MusicStore',
      products
    });
  },

  // GET /products/create — Formulario crear producto
  create: (req, res) => {
    res.render('products/create', {
      title: 'Agregar producto — Ushuaia MusicStore'
    });
  },

  // POST /products — Guardar nuevo producto
  store: (req, res) => {
    const products = getProducts();
    const newProduct = {
      id: products.length > 0 ? products[products.length - 1].id + 1 : 1,
      name: req.body.name,
      description: req.body.description,
      image: req.body.image || 'default-product.png',
      category: req.body.category,
      colors: req.body.colors ? req.body.colors.split(',').map(c => c.trim()) : [],
      price: parseFloat(req.body.price)
    };
    products.push(newProduct);
    saveProducts(products);
    res.redirect('/products');
  },

  // GET /products/:id — Detalle de producto
  detail: (req, res) => {
    const products = getProducts();
    const product = products.find(p => p.id === parseInt(req.params.id));
    if (!product) {
      return res.status(404).send('Producto no encontrado');
    }
    res.render('products/detail', {
      title: `${product.name} — Ushuaia MusicStore`,
      product
    });
  },

  // GET /products/:id/edit — Formulario editar producto
  edit: (req, res) => {
    const products = getProducts();
    const product = products.find(p => p.id === parseInt(req.params.id));
    if (!product) {
      return res.status(404).send('Producto no encontrado');
    }
    res.render('products/edit', {
      title: `Editar ${product.name} — Ushuaia MusicStore`,
      product
    });
  },

  // PUT /products/:id — Actualizar producto
  update: (req, res) => {
    const products = getProducts();
    const index = products.findIndex(p => p.id === parseInt(req.params.id));
    if (index === -1) {
      return res.status(404).send('Producto no encontrado');
    }
    products[index] = {
      ...products[index],
      name: req.body.name,
      description: req.body.description,
      image: req.body.image || products[index].image,
      category: req.body.category,
      colors: req.body.colors ? req.body.colors.split(',').map(c => c.trim()) : [],
      price: parseFloat(req.body.price)
    };
    saveProducts(products);
    res.redirect(`/products/${req.params.id}`);
  },

  // DELETE /products/:id — Eliminar producto
  destroy: (req, res) => {
    const products = getProducts();
    const filtered = products.filter(p => p.id !== parseInt(req.params.id));
    saveProducts(filtered);
    res.redirect('/products');
  },

  // GET /products/cart — Carrito de compras
  cart: (req, res) => {
    res.render('products/cart', {
      title: 'Carrito de compras — Ushuaia MusicStore'
    });
  }

};

module.exports = controller;