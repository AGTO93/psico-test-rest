const express = require('express');
const authenticateToken = require('../../middlewares/authMiddleware'); 
const documentTypeController = require('../../controllers/business/document-type.controller');

const router = express.Router();

router.post('/document-type', authenticateToken, documentTypeController.create);
router.put('/document-type/:id', authenticateToken, documentTypeController.update);
router.get('/document-type', authenticateToken, documentTypeController.findAll);
router.get('/document-type/by-id/:id', authenticateToken, documentTypeController.findById);

module.exports = router;