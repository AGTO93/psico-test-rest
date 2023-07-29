'use strict';

const bcrypt = require('bcrypt');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Crea el usuario por defecto en el esquema "security"
    await queryInterface.sequelize.query(`
      INSERT INTO security.users (id, username, password, enabled, created_at, updated_at)
      VALUES ('aee46d79-6e8d-48c2-9f5a-2f4ee8d4d4fb', 'administrator', '${await bcrypt.hash('12345678', 10)}', true, NOW(), NOW());
    `);
  },

  down: async (queryInterface, Sequelize) => {
    // Elimina el usuario por defecto del esquema "security"
    await queryInterface.sequelize.query(`
      DELETE FROM security.users
      WHERE id = 'aee46d79-6e8d-48c2-9f5a-2f4ee8d4d4fb';
    `);
  }
};

