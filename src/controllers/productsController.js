// ============================================================
//  USHUAIA MUSICSTORE — controllers/productsController.js
// ============================================================

const controller = {

  // GET /products — Listado de productos
  list: (req, res) => {
    res.render('products/list', {
      title: 'Productos — Ushuaia MusicStore'
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
    // En Sprint 4 se guarda en JSON
    // Por ahora redirige al listado
    res.redirect('/products');
  },

  // GET /products/:id — Detalle de producto
  detail: (req, res) => {
    res.render('products/detail', {
      title: 'Detalle de producto — Ushuaia MusicStore',
      id: req.params.id
    });
  },

  // GET /products/:id/edit — Formulario editar producto
  edit: (req, res) => {
    res.render('products/edit', {
      title: 'Editar producto — Ushuaia MusicStore',
      id: req.params.id
    });
  },

  // PUT /products/:id — Actualizar producto
  update: (req, res) => {
    // En Sprint 4 se actualiza en JSON
    res.redirect('/products');
  },

  // DELETE /products/:id — Eliminar producto
  destroy: (req, res) => {
    // En Sprint 4 se elimina del JSON
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