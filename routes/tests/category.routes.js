const express = require('express');
const authenticateToken = require('../../middlewares/authMiddleware'); 
const categoryController = require('../../controllers/tests/category.controller');

const router = express.Router();

router.post('/category', authenticateToken, categoryController.create);
router.put('/category/:id', authenticateToken, categoryController.update);
router.get('/category', authenticateToken, categoryController.findAll);
router.get('/category/by-id/:id', authenticateToken, categoryController.findById);

module.exports = router;