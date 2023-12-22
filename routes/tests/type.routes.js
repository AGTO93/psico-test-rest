const express = require('express');
const authenticateToken = require('../../middlewares/authMiddleware'); 
const typeController = require('../../controllers/tests/type.controller');

const router = express.Router();

router.post('/type', authenticateToken, typeController.create);
router.put('/type/:id', authenticateToken, typeController.update);
router.get('/type', authenticateToken, typeController.findAll);
router.get('/type/by-id/:id', authenticateToken, typeController.findById);

module.exports = router;