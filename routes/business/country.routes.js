const express = require('express');
const authenticateToken = require('../../middlewares/authMiddleware'); 
const countryController = require('../../controllers/business/country.controller');

const router = express.Router();

router.post('/country', authenticateToken, countryController.create);
router.put('/country/:id', authenticateToken, countryController.update);
router.get('/country', authenticateToken, countryController.findAll);
router.get('/country/by-id/:id', authenticateToken, countryController.findById);

module.exports = router;