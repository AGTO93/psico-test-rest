const express = require('express');
const authenticateToken = require('../../middlewares/authMiddleware'); 
const suboptionController = require('../../controllers/tests/suboption.controller');

const router = express.Router();

router.post('/suboption', authenticateToken, suboptionController.create);
router.put('/suboption/:id', authenticateToken, suboptionController.update);
router.get('/suboption', authenticateToken, suboptionController.findAll);
router.get('/suboption/by-id/:id', authenticateToken, suboptionController.findById);

module.exports = router;