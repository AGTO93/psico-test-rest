const express = require('express');
const authenticateToken = require('../../middlewares/authMiddleware'); 
const answerController = require('../../controllers/tests/answer.controller');

const router = express.Router();

router.post('/answer', authenticateToken, answerController.create);
router.put('/answer/:id', authenticateToken, answerController.update);
router.get('/answer', authenticateToken, answerController.findAll);
router.get('/answer/by-id/:id', authenticateToken, answerController.findById);

module.exports = router;