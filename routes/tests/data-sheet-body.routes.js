const express = require('express');
const authenticateToken = require('../../middlewares/authMiddleware'); 
const dataSheetBodyController = require('../../controllers/tests/data-sheet-body.controller');

const router = express.Router();

router.post('/data-sheet-body', authenticateToken, dataSheetBodyController.create);
router.put('/data-sheet-body/:id', authenticateToken, dataSheetBodyController.update);
router.get('/data-sheet-body', authenticateToken, dataSheetBodyController.findAll);
router.get('/data-sheet-body/by-id/:id', authenticateToken, dataSheetBodyController.findById);

module.exports = router;