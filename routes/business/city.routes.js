const express = require('express');
const authenticateToken = require('../../middlewares/authMiddleware'); 
const cityController = require('../../controllers/business/city.controller');

const router = express.Router();

router.post('/city', authenticateToken, cityController.create);
router.put('/city/:id', authenticateToken, cityController.update);
router.get('/city', authenticateToken, cityController.findAll);
router.get('/city/by-id/:id', authenticateToken, cityController.findById);

module.exports = router;