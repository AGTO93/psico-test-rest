const express = require('express');
const authenticateToken = require('../../middlewares/authMiddleware'); 
const genderController = require('../../controllers/business/gender.controller');

const router = express.Router();

router.post('/gender', authenticateToken, genderController.create);
router.put('/gender/:id', authenticateToken, genderController.update);
router.get('/gender', authenticateToken, genderController.findAll);
router.get('/gender/by-id/:id', authenticateToken, genderController.findById);

module.exports = router;