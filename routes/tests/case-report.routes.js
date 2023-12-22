const express = require('express');
const authenticateToken = require('../../middlewares/authMiddleware'); 
const caseReportController = require('../../controllers/tests/case-report.controller');

const router = express.Router();

router.post('/case-report', authenticateToken, caseReportController.create);
router.put('/case-report/:id', authenticateToken, caseReportController.update);
router.get('/case-report', authenticateToken, caseReportController.findAll);
router.get('/case-report/by-id/:id', authenticateToken, caseReportController.findById);

module.exports = router;