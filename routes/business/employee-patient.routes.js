const express = require('express');
const authenticateToken = require('../../middlewares/authMiddleware'); 
const employeePatientController = require('../../controllers/business/employee-patient.controller');

const router = express.Router();

router.post('/employee-patient', authenticateToken, employeePatientController.create);
router.put('/employee-patient/:id', authenticateToken, employeePatientController.update);
router.get('/employee-patient', authenticateToken, employeePatientController.findAll);
router.get('/employee-patient/by-id/:id', authenticateToken, employeePatientController.findById);

module.exports = router;