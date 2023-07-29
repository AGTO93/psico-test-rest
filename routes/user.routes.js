// En protectedRoutes.js
const express = require('express');
const authenticateToken = require('../middlewares/authMiddleware'); // Importa el middleware

const router = express.Router();

// Ruta protegida bajo /api
router.get('/user', authenticateToken, (req, res) => {
    res.json({ message: 'Acceso permitido a la ruta protegida', user: req.user });
});

module.exports = router;
