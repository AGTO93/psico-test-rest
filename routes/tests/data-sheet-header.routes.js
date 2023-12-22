const express = require('express');
const authenticateToken = require('../../middlewares/authMiddleware'); 
const dataSheetHeaderController = require('../../controllers/tests/data-sheet-header.controller');

const router = express.Router();

router.post('/data-sheet-header', authenticateToken, dataSheetHeaderController.create);
router.put('/data-sheet-header/:id', authenticateToken, dataSheetHeaderController.update);
router.get('/data-sheet-header', authenticateToken, dataSheetHeaderController.findAll);
router.get('/data-sheet-header/by-id/:id', authenticateToken, dataSheetHeaderController.findById);

module.exports = router;