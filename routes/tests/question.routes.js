const express = require('express');
const authenticateToken = require('../../middlewares/authMiddleware'); 
const questionController = require('../../controllers/tests/question.controller');

const router = express.Router();

router.post('/question', authenticateToken, questionController.create);
router.put('/question/:id', authenticateToken, questionController.update);
router.get('/question', authenticateToken, questionController.findAll);
router.get('/question/by-id/:id', authenticateToken, questionController.findById);

module.exports = router;