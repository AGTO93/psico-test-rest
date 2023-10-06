'use strict';

const bcrypt = require('bcrypt');
const { v4: uuidv4 } = require('uuid');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Crea el usuario por defecto en el esquema "security"
    await queryInterface.sequelize.query(`
      CREATE SCHEMA IF NOT EXISTS security;
      CREATE SCHEMA IF NOT EXISTS business;
      CREATE SCHEMA IF NOT EXISTS system;
      CREATE SCHEMA IF NOT EXISTS tests;
      INSERT INTO security.users (id, username, password, enabled, created_at, updated_at) VALUES ('aee46d79-6e8d-48c2-9f5a-2f4ee8d4d4fb', 'administrator', '${await bcrypt.hash('12345678', 10)}', true, NOW(), NOW());
      INSERT INTO security.roles(id, name, created_at, updated_at) VALUES('39f8f615-6a93-49fc-b6e3-806d883f710d', 'ADMINISTRATOR', NOW(), NOW()); 
      INSERT INTO security.roles(id, name, created_at, updated_at) VALUES('2873dfec-a4e5-471c-8dd2-8d53ff80accc', 'BUSINESS_ADMIN', NOW(), NOW());
      INSERT INTO security.roles(id, name, created_at, updated_at) VALUES('142dfd27-ad4d-4633-a52f-f1d915204bbd', 'BUSINESS_EMPLOYEE', NOW(), NOW());
      INSERT INTO security.user_roles(id, user_id, role_id, created_at, updated_at) VALUES('${uuidv4()}', 'aee46d79-6e8d-48c2-9f5a-2f4ee8d4d4fb', '39f8f615-6a93-49fc-b6e3-806d883f710d', NOW(), NOW());
    `);
  },

  down: async (queryInterface, Sequelize) => {
    // Elimina el usuario por defecto del esquema "security"
    await queryInterface.sequelize.query(`
      DELETE FROM security.users
      WHERE id = 'aee46d79-6e8d-48c2-9f5a-2f4ee8d4d4fb';
      DELETE FROM security.roles WHERE name = 'ADMINISTRATOR';
      DELETE FROM security.roles WHERE name = 'BUSINESS_ADMIN';
      DELETE FROM security.roles WHERE name = 'BUSINESS_EMPLOYEE';
      DELETE FROM security.user_roles WHERE role_id = '39f8f615-6a93-49fc-b6e3-806d883f710d';
    `);
  }
};

