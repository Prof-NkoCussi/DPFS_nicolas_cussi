// ============================================================
//  Script para encriptar las contraseñas del users.json
//  Ejecutar UNA SOLA VEZ: node scripts/hashPasswords.js
// ============================================================

const bcrypt = require('bcrypt');
const fs     = require('fs');
const path   = require('path');

const filePath = path.join(__dirname, '../data/users.json');
const users    = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

async function hashAll() {
  for (const user of users) {
    // Solo encripta si la contraseña no está ya hasheada
    if (!user.password.startsWith('$2b$')) {
      user.password = await bcrypt.hash(user.password, 10);
      console.log(`✅ Contraseña encriptada para: ${user.email}`);
    } else {
      console.log(`⏭  Ya encriptada: ${user.email}`);
    }
  }
  fs.writeFileSync(filePath, JSON.stringify(users, null, 2), 'utf-8');
  console.log('\n✅ Todas las contraseñas fueron procesadas.');
}

hashAll();
