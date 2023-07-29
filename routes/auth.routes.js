const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

// Modelo de datos de usuarios (simulado)
const users = [
    { id: 1, username: 'usuario', password: 'contraseña' },
    // Puedes agregar más usuarios aquí
];

// Ruta para iniciar sesión y obtener un token de acceso
router.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Buscar el usuario en la lista de usuarios (esto debería hacerse con una base de datos)
    const user = users.find((u) => u.username === username && u.password === password);

    if (user) {
        // Generar un nuevo token
        const token = jwt.sign({ username }, process.env.JWT_SECRET, {
            expiresIn: '1h', // Tiempo de expiración del token (1 hora en este caso)
        });

        res.json({ token });
    } else {
        res.status(401).json({ message: 'Credenciales inválidas' });
    }
});

// Ruta para cerrar sesión (opcional)
// Esta ruta invalidará el token actual y requerirá que el usuario inicie sesión nuevamente
router.post('/logout', (req, res) => {
    // Implementa la lógica para cerrar sesión aquí
    res.json({ message: 'Sesión cerrada exitosamente' });
});

module.exports = router;
