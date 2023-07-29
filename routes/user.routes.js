// En protectedRoutes.js
const express = require('express');
const authenticateToken = require('../middlewares/authMiddleware'); // Importa el middleware
const userController = require('../controllers/security/user.controller');

const router = express.Router();

// Ruta protegida bajo /api
router.get('/user', authenticateToken, userController.findByUsername);

router.post('/user', authenticateToken, userController.create);

router.get('/users', authenticateToken, userController.findAll);

module.exports = router;
