const { Sequelize } = require('sequelize');

// Cambiar las credenciales y detalles de la base de datos según tu configuración
const sequelize = new Sequelize('psico_test_db', 'postgres', 'psql123', {
    host: 'localhost',
    dialect: 'postgres',
});

module.exports = sequelize;
