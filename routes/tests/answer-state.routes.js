const express = require('express');
const authenticateToken = require('../../middlewares/authMiddleware'); 
const answerStateController = require('../../controllers/tests/answer-state.controller');

const router = express.Router();

router.post('/answer-state', authenticateToken, answerStateController.create);
router.put('/answer-state/:id', authenticateToken, answerStateController.update);
router.get('/answer-state', authenticateToken, answerStateController.findAll);
router.get('/answer-state/by-id/:id', authenticateToken, answerStateController.findById);

module.exports = router;