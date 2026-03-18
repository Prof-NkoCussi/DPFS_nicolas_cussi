// ============================================================
//  USHUAIA MUSICSTORE — controllers/productsController.js
//  Sprint 6 — Sequelize (MySQL)
// ============================================================

const { Product, Category } = require('../../database/models');

const controller = {

  // GET /products — Listado de productos (con filtro opcional por categoría)
  list: async (req, res) => {
    try {
      const { category } = req.query;

      // Si viene ?category=guitarras busca el id de esa categoría
      let whereClause = {};
      let pageTitle   = 'Productos — Ushuaia MusicStore';

      if (category) {
        const cat = await Category.findOne({ where: { name: category } });
        if (cat) {
          whereClause   = { category_id: cat.id };
          pageTitle     = `${cat.name.charAt(0).toUpperCase() + cat.name.slice(1)} — Ushuaia MusicStore`;
        }
      }

      const products = await Product.findAll({
        where:   whereClause,
        include: [{ association: 'category' }],
        order:   [['name', 'ASC']]
      });

      res.render('products/list', {
        title:           pageTitle,
        products,
        activeCategory:  category || null
      });
    } catch (err) {
      console.error(err);
      res.status(500).send('Error al obtener los productos');
    }
  },

  // GET /products/create — Formulario crear producto
  create: async (req, res) => {
    try {
      const categories = await Category.findAll({ order: [['name', 'ASC']] });
      res.render('products/create', {
        title: 'Agregar producto — Ushuaia MusicStore',
        categories
      });
    } catch (err) {
      console.error(err);
      res.status(500).send('Error al cargar el formulario');
    }
  },

  // POST /products — Guardar nuevo producto
  store: async (req, res) => {
    try {
      await Product.create({
        name:        req.body.name,
        description: req.body.description,
        image:       req.body.image || 'default-product.png',
        category_id: req.body.category_id || null,
        colors:      req.body.colors || '',
        price:       parseFloat(req.body.price),
        stock:       parseInt(req.body.stock) || 0
      });
      res.redirect('/products');
    } catch (err) {
      console.error(err);
      res.status(500).send('Error al guardar el producto');
    }
  },

  // GET /products/:id — Detalle de producto
  detail: async (req, res) => {
    try {
      const product = await Product.findByPk(req.params.id, {
        include: [{ association: 'category' }]
      });
      if (!product) return res.status(404).send('Producto no encontrado');

      // Productos relacionados — misma categoría, excluye el actual
      const related = await Product.findAll({
        where: { category_id: product.category_id },
        include: [{ association: 'category' }],
        limit: 4
      });
      const relatedProducts = related.filter(p => p.id !== product.id).slice(0, 4);

      res.render('products/detail', {
        title: `${product.name} — Ushuaia MusicStore`,
        product,
        relatedProducts
      });
    } catch (err) {
      console.error(err);
      res.status(500).send('Error al obtener el producto');
    }
  },

  // GET /products/:id/edit — Formulario editar producto
  edit: async (req, res) => {
    try {
      const [product, categories] = await Promise.all([
        Product.findByPk(req.params.id, { include: [{ association: 'category' }] }),
        Category.findAll({ order: [['name', 'ASC']] })
      ]);
      if (!product) return res.status(404).send('Producto no encontrado');
      res.render('products/edit', {
        title: `Editar ${product.name} — Ushuaia MusicStore`,
        product,
        categories
      });
    } catch (err) {
      console.error(err);
      res.status(500).send('Error al cargar el formulario');
    }
  },

  // PUT /products/:id — Actualizar producto
  update: async (req, res) => {
    try {
      const product = await Product.findByPk(req.params.id);
      if (!product) return res.status(404).send('Producto no encontrado');
      await product.update({
        name:        req.body.name,
        description: req.body.description,
        image:       req.body.image || product.image,
        category_id: req.body.category_id || null,
        colors:      req.body.colors || '',
        price:       parseFloat(req.body.price),
        stock:       parseInt(req.body.stock) || 0
      });
      res.redirect(`/products/${req.params.id}`);
    } catch (err) {
      console.error(err);
      res.status(500).send('Error al actualizar el producto');
    }
  },

  // DELETE /products/:id — Eliminar producto
  destroy: async (req, res) => {
    try {
      const product = await Product.findByPk(req.params.id);
      if (!product) return res.status(404).send('Producto no encontrado');
      await product.destroy();
      res.redirect('/products');
    } catch (err) {
      console.error(err);
      res.status(500).send('Error al eliminar el producto');
    }
  },

  // GET /products/cart — Ver carrito
  cart: (req, res) => {
    const cart = req.session.cart || [];
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    res.render('products/cart', {
      title: 'Carrito de compras — Ushuaia MusicStore',
      cart,
      total
    });
  },

  // POST /products/cart/add — Agregar producto al carrito
  addToCart: async (req, res) => {
    try {
      const product = await Product.findByPk(req.body.product_id);
      if (!product) return res.redirect('/products');

      if (!req.session.cart) req.session.cart = [];

      const existing = req.session.cart.find(i => i.id === product.id);
      if (existing) {
        existing.quantity += 1;
      } else {
        req.session.cart.push({
          id:       product.id,
          name:     product.name,
          image:    product.image,
          price:    parseFloat(product.price),
          quantity: 1
        });
      }
      res.redirect('/products/cart');
    } catch (err) {
      console.error(err);
      res.redirect('/products');
    }
  },

  // POST /products/cart/remove — Eliminar producto del carrito
  removeFromCart: (req, res) => {
    const id = parseInt(req.body.product_id);
    req.session.cart = (req.session.cart || []).filter(i => i.id !== id);
    res.redirect('/products/cart');
  },

  // POST /products/cart/clear — Vaciar carrito
  clearCart: (req, res) => {
    req.session.cart = [];
    res.redirect('/products/cart');
  },

  // POST /products/cart/update — Actualizar cantidad
  updateCart: (req, res) => {
    const id  = parseInt(req.body.product_id);
    const qty = parseInt(req.body.quantity);
    const cart = req.session.cart || [];
    const item = cart.find(i => i.id === id);
    if (item) {
      if (qty < 1) {
        req.session.cart = cart.filter(i => i.id !== id);
      } else {
        item.quantity = qty;
      }
    }
    res.redirect('/products/cart');
  }

};

module.exports = controller;
