const { User, Product, Category } = require('../../database/models');

// GET /api/users/
const getUsers = async (req, res) => {
  try {
    const users = await User.findAll({
      attributes: ['id', 'firstName', 'lastName', 'email', 'image', 'role', 'createdAt']
    });

    return res.json({
      count: users.length,
      users: users.map(u => ({
        id:        u.id,
        name:      `${u.firstName} ${u.lastName}`,
        email:     u.email,
        image:     `/images/users/${u.image}`,
        role:      u.role,
        createdAt: u.createdAt,
        detail:    `/api/users/${u.id}`
      }))
    });
  } catch (error) {
    return res.status(500).json({ error: 'Error al obtener usuarios' });
  }
};

// GET /api/users/:id
const getUserById = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id, {
      attributes: ['id', 'firstName', 'lastName', 'email', 'image', 'role', 'createdAt']
    });

    if (!user) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }

    return res.json({
      id:        user.id,
      firstName: user.firstName,
      lastName:  user.lastName,
      email:     user.email,
      image:     `/images/users/${user.image}`,
      role:      user.role,
      createdAt: user.createdAt
    });
  } catch (error) {
    return res.status(500).json({ error: 'Error al obtener el usuario' });
  }
};

// GET /api/products/
const getProducts = async (req, res) => {
  try {
    const products = await Product.findAll({
      include: [{ model: Category, as: 'category' }]
    });

    const countByCategory = {};
    products.forEach(p => {
      const cat = p.category ? p.category.name : 'sin categoría';
      countByCategory[cat] = (countByCategory[cat] || 0) + 1;
    });

    return res.json({
      count: products.length,
      countByCategory,
      products: products.map(p => ({
        id:          p.id,
        name:        p.name,
        description: p.description,
        price:       p.price,
        image:       `/images/products/${p.image}`,
        category:    p.category ? p.category.name : null,
        detail:      `/api/products/${p.id}`
      }))
    });
  } catch (error) {
    return res.status(500).json({ error: 'Error al obtener productos' });
  }
};

// GET /api/products/:id
const getProductById = async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id, {
      include: [{ model: Category, as: 'category' }]
    });

    if (!product) {
      return res.status(404).json({ error: 'Producto no encontrado' });
    }

    return res.json({
      id:          product.id,
      name:        product.name,
      description: product.description,
      price:       product.price,
      image:       `/images/products/${product.image}`,
      colors:      product.colors,
      stock:       product.stock,
      category:    product.category ? product.category.name : null,
      createdAt:   product.createdAt
    });
  } catch (error) {
    return res.status(500).json({ error: 'Error al obtener el producto' });
  }
};

module.exports = { getUsers, getUserById, getProducts, getProductById };
