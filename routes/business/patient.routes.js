const express = require('express');
const authenticateToken = require('../../middlewares/authMiddleware'); 
const patientController = require('../../controllers/business/patient.controller');

const router = express.Router();

router.post('/patient', authenticateToken, patientController.create);
router.put('/patient/:id', authenticateToken, patientController.update);
router.get('/patient', authenticateToken, patientController.findAll);
router.get('/patient/by-id/:id', authenticateToken, patientController.findById);
router.get('/patient/by-employee-id/:id', authenticateToken, patientController.findByEmployeeId);
router.put('/patient', authenticateToken, patientController.update);
router.delete('/patient/:id', authenticateToken, patientController.delete);

module.exports = router;