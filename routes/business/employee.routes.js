const express = require('express');
const authenticateToken = require('../../middlewares/authMiddleware'); 
const employeeController = require('../../controllers/business/employee.controller');

const router = express.Router();

router.post('/employee', authenticateToken, employeeController.create);
router.put('/employee/:id', authenticateToken, employeeController.update);
router.get('/employee', authenticateToken, employeeController.findAll);
router.get('/employee/by-id/:id', authenticateToken, employeeController.findById);
router.put('/employee', authenticateToken, employeeController.update);
router.delete('/employee/:id', authenticateToken, employeeController.delete);

module.exports = router;