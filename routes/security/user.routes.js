// En protectedRoutes.js
const express = require('express');
const authenticateToken = require('../../middlewares/authMiddleware'); // Importa el middleware
const userController = require('../../controllers/security/user.controller');

const router = express.Router();

// Ruta protegida bajo /api
router.post('/user', authenticateToken, userController.create);
router.get('/user', authenticateToken, userController.findAll);
router.get('/user/by-username/:username', authenticateToken, userController.findByUsername);
router.post('/user/update-password', authenticateToken, userController.updatePassword);

module.exports = router;
