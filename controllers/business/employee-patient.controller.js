const EmployeePatientService = require('../../services/business/employee-patient.service');

exports.create = async (req, res) => {
    /* 	#swagger.tags = ['Employee Patient']
        #swagger.description = 'Endpoint to create new employee patient' */

    /* #swagger.security = [{
            "apiKeyAuth": []
    }] */
    try {
        const employeePatienData = req.body;
        const newEmployeePatient = await EmployeePatientService.createEmployeePatient(employeePatienData);
        res.json(newEmployeePatient);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.update = async (req, res) => {
    /* 	#swagger.tags = ['Employee Patient']
        #swagger.description = 'Endpoint to update employee patient' */

    /* #swagger.security = [{
            "apiKeyAuth": []
    }] */
    try {
        const { id } = req.params;
        const employeePatienData = req.body;
        const updatedEmployeePatient = await EmployeePatientService.updateEmployeePatient(id, employeePatienData);
        res.json(updatedEmployeePatient);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.findAll = async (req, res) => {
    /* 	#swagger.tags = ['Employee Patient']
        #swagger.description = 'Endpoint to list employee patients' */

    /* #swagger.security = [{
            "apiKeyAuth": []
    }] */
    try {
        const employeePatient = await EmployeePatientService.findAllEmployeePatient();
        res.json(employeePatient);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.findById = async (req, res) => {
    /* 	#swagger.tags = ['Employee Patient']
        #swagger.description = 'Endpoint to find a specific demployee patient' */

    /* #swagger.security = [{
            "apiKeyAuth": []
    }] */
    try {
        const { id } = req.params;
        const employeePatient = await EmployeePatientService.findEmployeePatientById(id);
        res.json(employeePatient);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};