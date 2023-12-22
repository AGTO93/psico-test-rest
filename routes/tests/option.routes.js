const express = require('express');
const authenticateToken = require('../../middlewares/authMiddleware'); 
const optionController = require('../../controllers/tests/option.controller');

const router = express.Router();

router.post('/option', authenticateToken, optionController.create);
router.put('/option/:id', authenticateToken, optionController.update);
router.get('/option', authenticateToken, optionController.findAll);
router.get('/option/by-id/:id', authenticateToken, optionController.findById);

module.exports = router;