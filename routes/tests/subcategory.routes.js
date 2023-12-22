const express = require('express');
const authenticateToken = require('../../middlewares/authMiddleware'); 
const subcategoryController = require('../../controllers/tests/subcategory.controller');

const router = express.Router();

router.post('/subcategory', authenticateToken, subcategoryController.create);
router.put('/subcategory/:id', authenticateToken, subcategoryController.update);
router.get('/subcategory', authenticateToken, subcategoryController.findAll);
router.get('/subcategory/by-id/:id', authenticateToken, subcategoryController.findById);

module.exports = router;