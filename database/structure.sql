-- ============================================================
-- Ushuaia Music Store — Script de estructura de base de datos
-- Sprint 6 — DPFS Nicolas Cussi
-- ============================================================

-- Crear y seleccionar la base de datos
CREATE DATABASE IF NOT EXISTS ushuaia_musicstore
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

USE ushuaia_musicstore;

-- ============================================================
-- Tabla: categories
-- ============================================================
CREATE TABLE IF NOT EXISTS categories (
  id          INT           NOT NULL AUTO_INCREMENT,
  name        VARCHAR(100)  NOT NULL,
  description VARCHAR(255)  DEFAULT NULL,
  PRIMARY KEY (id),
  UNIQUE KEY uq_categories_name (name)
);

-- ============================================================
-- Tabla: products
-- ============================================================
CREATE TABLE IF NOT EXISTS products (
  id          INT             NOT NULL AUTO_INCREMENT,
  name        VARCHAR(150)    NOT NULL,
  description TEXT            DEFAULT NULL,
  price       DECIMAL(10,2)   NOT NULL,
  image       VARCHAR(255)    DEFAULT NULL,
  colors      VARCHAR(255)    DEFAULT NULL,
  stock       INT             NOT NULL DEFAULT 0,
  category_id INT             DEFAULT NULL,
  createdAt   DATETIME        NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updatedAt   DATETIME        NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  CONSTRAINT fk_products_category
    FOREIGN KEY (category_id)
    REFERENCES categories (id)
    ON DELETE SET NULL
    ON UPDATE CASCADE
);

-- ============================================================
-- Tabla: users
-- ============================================================
CREATE TABLE IF NOT EXISTS users (
  id          INT           NOT NULL AUTO_INCREMENT,
  firstName   VARCHAR(100)  NOT NULL,
  lastName    VARCHAR(100)  NOT NULL,
  email       VARCHAR(150)  NOT NULL,
  password    VARCHAR(255)  NOT NULL,
  image       VARCHAR(255)  DEFAULT 'default-user.png',
  role        ENUM('admin', 'user') NOT NULL DEFAULT 'user',
  createdAt   DATETIME      NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updatedAt   DATETIME      NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  UNIQUE KEY uq_users_email (email)
);
