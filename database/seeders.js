// database/seeders.js
// Script de migración: carga los datos del JSON a MySQL
// Ejecutar con: node database/seeders.js

require('dotenv').config();

const { sequelize, Category, Product, User } = require('./models');

const categories = [
  { name: 'guitarras',  description: 'Guitarras eléctricas, acústicas y clásicas' },
  { name: 'teclados',   description: 'Pianos digitales y controladores MIDI' },
  { name: 'baterias',   description: 'Baterías acústicas y electrónicas' },
  { name: 'microfonos', description: 'Micrófonos dinámicos y de condensador' },
  { name: 'accesorios', description: 'Amplificadores, pedales y accesorios varios' },
];

const products = [
  { name: 'Guitarra Eléctrica Stratocaster',      description: 'Guitarra eléctrica de cuerpo sólido con 3 micrófonos single-coil, mástil de arce y diapasón de palo de rosa. Ideal para rock, blues y pop.', image: 'guitarra-001.png', category: 'guitarras', colors: 'sunburst,negro,blanco',         price: 85000,  stock: 10 },
  { name: 'Guitarra Acústica Dreadnought',         description: 'Guitarra acústica de tapa de abeto macizo y aros y fondo de caoba. Sonido cálido y proyección excelente, perfecta para principiantes y músicos intermedios.', image: 'guitarra-002.png', category: 'guitarras', colors: 'natural,sunburst',             price: 45000,  stock: 8  },
  { name: 'Guitarra Eléctrica Les Paul',           description: 'Guitarra eléctrica de cuerpo macizo con 2 micrófonos humbucker. Sonido potente y sustain largo, ideal para rock y metal.', image: 'guitarra-003.png', category: 'guitarras', colors: 'cherry sunburst,negro,gold top', price: 95000,  stock: 5  },
  { name: 'Teclado MIDI 61 Teclas',               description: 'Controlador MIDI con 61 teclas semipesadas, 8 pads de batería, ruedas de pitch y modulación. Compatible con todos los DAWs del mercado.', image: 'teclado-01.png',  category: 'teclados',   colors: 'blanco',                    price: 60000,  stock: 7  },
  { name: 'Piano Digital 88 Teclas',              description: 'Piano digital con 88 teclas contrapesadas, acción de martillo graduado y 256 voces de polifonía. Incluye banco de 30 sonidos y bluetooth.', image: 'teclado-02.png',  category: 'teclados',   colors: 'negro,blanco',              price: 180000, stock: 3  },
  { name: 'Batería Acústica 5 Piezas',            description: 'Batería acústica completa con bombo de 22", caja de 14", 3 toms y platos hi-hat, crash y ride incluidos. Ideal para ensayos y presentaciones.', image: 'bateria-01.png',  category: 'baterias',   colors: 'negro,rojo,azul',           price: 220000, stock: 4  },
  { name: 'Batería Electrónica 9 Pads',           description: 'Batería electrónica con 9 pads de malla, módulo con 25 kits pregrabados y salida de auriculares. Perfecta para practicar sin hacer ruido.', image: 'bateria-02.jpg',  category: 'baterias',   colors: 'negro',                     price: 150000, stock: 6  },
  { name: 'Micrófono Dinámico Cardioide',         description: 'Micrófono dinámico con patrón cardioide, respuesta de frecuencia de 50Hz a 15kHz. Ideal para voces en vivo y amplificadores de guitarra.', image: 'microfono-01.png', category: 'microfonos', colors: 'negro',                     price: 18000,  stock: 15 },
  { name: 'Micrófono de Condensador Cardioide',   description: 'Micrófono de condensador de diafragma grande con patrón cardioide. Ideal para grabación en estudio de voces, guitarra acústica y piano.', image: 'microfono-02.jpg', category: 'microfonos', colors: 'plata,negro',               price: 42000,  stock: 9  },
  { name: 'Amplificador de Guitarra 40W',         description: 'Amplificador combo de 40 watts con parlante de 12", canal limpio y canal de overdrive, reverb incorporado y efectos de chorus y delay.', image: 'amplificador-01.jpg', category: 'accesorios', colors: 'negro',                   price: 75000,  stock: 5  },
  { name: 'Pedal de Efectos Multiefecto',         description: 'Procesador multiefecto con más de 100 efectos integrados, afinador cromático, looper de 60 segundos y conexión USB para actualizaciones.', image: 'pedal-01.png',    category: 'accesorios', colors: 'negro',                     price: 55000,  stock: 8  },
  { name: 'Set de Cuerdas para Guitarra Eléctrica', description: 'Set de 6 cuerdas de acero niquelado calibre 009-042. Alta durabilidad y respuesta tonal equilibrada. Pack de 3 sets.', image: 'cuerdas-01.jpg',  category: 'accesorios', colors: 'plateado',                  price: 3500,   stock: 30 },
];

const users = [
  { firstName: 'Nicolas', lastName: 'Cussi',    email: 'nicolas@ushmusicstore.com', password: '$2b$10$ctUuFjA9G9nGC7s6CJovCuvq.Kgv6.//rl7nxPe8TqyzXenK/j/da', role: 'admin', image: 'user-01.png'      },
  { firstName: 'Ale',     lastName: 'Cussi',    email: 'ale.cussi@email.com',       password: '$2b$10$6tBPoIXdeMDU7aDCs.cf8O2XINncVtEbPsWChlOzMzCKh4WlWUig.', role: 'user',  image: 'user-default.png' },
  { firstName: 'Mateo',   lastName: 'Burri',    email: 'mateo.burri@email.com',     password: '$2b$10$MTkPcFJdqEPyOKnCiujUo.HB3OvoeJ6wt5E/89pVCpnY7XCEiliEq', role: 'user',  image: 'user-default.png' },
  { firstName: 'Sofía',   lastName: 'Gómez',    email: 'sofia.gomez@email.com',     password: '$2b$10$g4Lr.IytHraj7Caq6qSVN.q0LffCZf4aQOtCoj1XkNYeEFjAAq.S2', role: 'user',  image: 'user-default.png' },
  { firstName: 'Diego',   lastName: 'Martínez', email: 'diego.martinez@email.com',  password: '$2b$10$IOx.HF1TVIzvF0vOMGMLE.HtZtzP/Y.OI56YAk0RDEUSA7JpJJeI.', role: 'user',  image: 'user-default.png' },
];

async function seed() {
  try {
    await sequelize.authenticate();
    console.log('✅ Conexión a MySQL exitosa');

    // 1 — Insertar categorías
    console.log('\n📦 Insertando categorías...');
    const createdCategories = {};
    for (const cat of categories) {
      const [category] = await Category.findOrCreate({ where: { name: cat.name }, defaults: cat });
      createdCategories[cat.name] = category.id;
      console.log(`   ✓ ${cat.name} (id: ${category.id})`);
    }

    // 2 — Insertar productos
    console.log('\n🎸 Insertando productos...');
    for (const prod of products) {
      const category_id = createdCategories[prod.category];
      const { category, ...prodData } = prod;
      const [product, created] = await Product.findOrCreate({
        where: { name: prodData.name },
        defaults: { ...prodData, category_id }
      });
      console.log(`   ${created ? '✓' : '⚠ ya existía'} ${prod.name}`);
    }

    // 3 — Insertar usuarios
    console.log('\n👤 Insertando usuarios...');
    for (const usr of users) {
      const [user, created] = await User.findOrCreate({
        where: { email: usr.email },
        defaults: usr
      });
      console.log(`   ${created ? '✓' : '⚠ ya existía'} ${usr.email}`);
    }

    console.log('\n✅ Migración completada exitosamente');
    process.exit(0);

  } catch (err) {
    console.error('❌ Error en la migración:', err.message);
    process.exit(1);
  }
}

seed();
