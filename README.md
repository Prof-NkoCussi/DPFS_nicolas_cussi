# 🎸 Ushuaia Music Store

## 🛒 E-commerce de Instrumentos Musicales

---

## Descripción del proyecto

**Ushuaia Music Store** es un e-commerce dedicado a la venta de instrumentos musicales y equipamiento para músicos.
El sitio permitirá a los usuarios explorar diferentes categorías de instrumentos como guitarras, teclados, baterías, micrófonos y accesorios musicales, visualizar los detalles de cada producto y agregarlos a un carrito de compras para realizar la compra online.

La plataforma busca ofrecer una experiencia de usuario simple, intuitiva y moderna, permitiendo a los músicos encontrar fácilmente los instrumentos que necesitan y realizar su compra de forma rápida y segura.

El proyecto forma parte del desafío profesional del programa **Full Stack Developer**, donde se desarrollará una aplicación completa utilizando tecnologías como **Node.js, bases de datos y React**.

---

## Objetivo

El sitio está orientado a personas interesadas en la música, desde principiantes que desean comprar su primer instrumento hasta músicos más experimentados que buscan ampliar su equipamiento.

El público principal está compuesto por:

* Jóvenes y adultos entre **16 y 45 años**
* Estudiantes de música
* Músicos aficionados y profesionales
* Personas interesadas en instrumentos y equipamiento musical

El objetivo es ofrecer una plataforma accesible donde los usuarios puedan descubrir instrumentos musicales y adquirirlos fácilmente desde cualquier lugar.

---

## Sobre mí

Mi nombre es **Nicolas Cussi** y actualmente me desempeño como **profesor en escuelas secundarias**, dictando materias relacionadas con **Ed. tecnologica, programación y robótica**.

Decidí realizar el trayecto de **Full Stack Developer en Digital House** como un desafío personal y profesional, con el objetivo de incorporar nuevas tecnologías, ampliar mis conocimientos en desarrollo web y continuar perfeccionándome en el área de la programación.

Este proyecto forma parte del proceso de formación dentro del programa y representa una oportunidad para aplicar de manera práctica los conocimientos adquiridos durante la cursada.

---

## Sitios de Referencia

Para el diseño y funcionalidades del proyecto se tomaron como referencia distintos sitios del mercado que ofrecen experiencias de compra similares o que presentan buenas prácticas de diseño y navegación.

### 1️⃣ Mercado Libre
https://www.mercadolibre.com.ar

Elegido por ser uno de los marketplaces más grandes de Latinoamérica y por su sistema de búsqueda, navegación por categorías y experiencia de compra.

### 2️⃣ Get Back Music Store
https://www.get-back.com.ar

Tienda especializada en instrumentos musicales y equipamiento profesional. Se tomó como referencia por su catálogo de productos y organización por categorías.

### 3️⃣ SDQ Store
https://www.sdqstore.com.ar

Empresa argentina con amplia trayectoria en la venta de instrumentos musicales. Fue elegida como referencia por su estructura de e-commerce y variedad de productos.

### 4️⃣ The Rock Store
https://therockstore.com.ar

Sitio especializado en instrumentos musicales y equipamiento de audio. Se destaca por su diseño visual y organización del catálogo de productos.

### 5️⃣ Centro Música
https://centromusica.com.ar

Tienda dedicada a la comercialización de instrumentos musicales y equipos de sonido. Se tomó como referencia por su presentación de productos y categorías.

---

## Funcionalidades principales del sitio

* Visualización de catálogo de productos
* Página de detalle de cada instrumento
* Registro e inicio de sesión de usuarios
* Carrito de compras
* Gestión de productos (crear, editar, eliminar)
* Navegación por categorías
* Autenticación con sesiones y contraseñas encriptadas
* Panel de administración con estadísticas (Sprint 8)

---

## Tecnologías utilizadas

**Frontend**
* HTML5
* CSS3
* JavaScript
* EJS (motor de templates)
* React 

**Backend**
* Node.js
* Express
* method-override *(PUT y DELETE desde formularios HTML)*
* express-session
* bcrypt
* Multer
* connect-flash
* Express Validator 

**Base de datos**
* JSON 
* MySQL + Sequelize 

**Herramientas**
* Git / GitHub
* nodemon
* GitHub Projects

---

## ▶️ Cómo correr el proyecto

**Requisitos:** Node.js y MySQL instalados

```bash
# 1. Clonar el repositorio
git clone https://github.com/Prof-NkoCussi/DPFS_nicolas_cussi.git

# 2. Instalar dependencias
npm install

# 3. Configurar variables de entorno
cp .env.example .env
# Editar .env con tus credenciales de MySQL

# 4. Crear la base de datos
# Abrir MySQL Workbench y ejecutar: database/structure.sql

# 5. Poblar la base de datos con datos de prueba
node database/seeders.js

# 6. Iniciar el servidor en modo desarrollo
npm run dev
```

El servidor queda disponible en: `http://localhost:3000`

---

## 📁 Estructura del proyecto

```
DPFS_nicolas_cussi/
│
├── app.js                          ← Servidor principal Express
├── package.json
├── .env                            ← Variables de entorno (no sube a GitHub)
├── .env.example                    ← Plantilla de variables de entorno
│
├── database/                       ← Sprint 6 — Base de datos
│   ├── config.js                        ← Conexión Sequelize a MySQL
│   ├── seeders.js                       ← Script para poblar la base de datos
│   ├── structure.sql                    ← Script de creación de tablas
│   ├── der_ushuaia_musicstore.drawio    ← Diagrama DER editable
│   ├── der_ushuaia_musicstore.pdf       ← Diagrama DER (entregable)
│   └── models/
│       ├── index.js                ← Relaciones entre modelos
│       ├── Category.js
│       ├── Product.js
│       └── User.js
│
├── data/                           ← Sprint 4 — Datos JSON (reemplazados por MySQL)
│   ├── products.json
│   └── users.json
│
├── public/                         ← Archivos estáticos
│   ├── images/
│   │   ├── banner/
│   │   ├── categories/
│   │   ├── products/
│   │   └── users/
│   └── styles/
│       ├── style.css
│       ├── forms.css
│       ├── productDetail.css
│       └── productCart.css
│
├── scripts/
│   └── hashPasswords.js
│
├── src/
│   ├── controllers/
│   │   ├── indexController.js
│   │   ├── productsController.js
│   │   └── usersController.js
│   │
│   ├── middlewares/
│   │   ├── auth.js                 ← isGuest, isUser, isAdmin
│   │   ├── multerConfig.js         ← Subida de imágenes
│   │   └── validations.js          ← Reglas express-validator (Sprint 7)
│   │
│   ├── routes/
│   │   ├── index.js
│   │   ├── products.js
│   │   └── users.js
│   │
│   └── views/
│       ├── index.ejs
│       ├── partials/
│       │   ├── head.ejs
│       │   ├── header.ejs
│       │   └── footer.ejs
│       ├── products/
│       │   ├── list.ejs
│       │   ├── detail.ejs
│       │   ├── cart.ejs
│       │   ├── create.ejs
│       │   └── edit.ejs
│       └── users/
│           ├── register.ejs
│           ├── login.ejs
│           └── profile.ejs
│
├── Views/                          ← Sprint 2 — Prototipos HTML estáticos
│   ├── productDetail.html
│   ├── productCart.html
│   ├── register.html
│   └── login.html
│
├── wireframes/                     ← Sprint 1 — Wireframes
│   ├── home.png
│   ├── detalle_producto.png
│   ├── carrito.png
│   ├── form_registro.png
│   └── login.png
│
├── README.md
└── retro.md
```

---

## 📌 Tablero de trabajo

[Ver tablero en GitHub Projects](https://github.com/users/Prof-NkoCussi/projects/1)

---

## 🚀 Estado del proyecto

| Sprint | Descripción | Estado |
|--------|-------------|--------|
| Sprint 1 | Planificación, wireframes y README | ✅ Completado |
| Sprint 2 | Maquetado HTML y CSS | ✅ Completado |
| Sprint 3 | Node.js + Express + EJS | ✅ Completado |
| Sprint 4 | CRUD con archivos JSON | ✅ Completado |
| Sprint 5 | Usuarios y autenticación | ✅ Completado |
| Sprint 6 | Base de datos MySQL + Sequelize | ✅ Completado |
| Sprint 7 | Validaciones frontend y backend | ✅ Completado |
| Sprint 8 | API REST + Dashboard React | ⏳ Pendiente |
