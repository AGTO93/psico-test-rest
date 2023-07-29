const express = require('express');
const router = express.Router();
const dotenv = require('dotenv');
const authController = require('../controllers/security/auth.controller');

dotenv.config();

// Ruta para iniciar sesión y obtener un token de acceso
router.post('/login', authController.login);

// Ruta para cerrar sesión (opcional)
// Esta ruta invalidará el token actual y requerirá que el usuario inicie sesión nuevamente
router.post('/logout', (req, res) => {
    // Implementa la lógica para cerrar sesión aquí
    res.json({ message: 'Sesión cerrada exitosamente' });
});

module.exports = router;
