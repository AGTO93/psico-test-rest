const EmployeePatient = require('../../models/business/employee-patient.model');
const PatientService = require('../../services/business/patient.service');

exports.create = async (req, res) => {
    /* 	#swagger.tags = ['Patient']
        #swagger.description = 'Endpoint to create new patient' */

    /* #swagger.security = [{
            "apiKeyAuth": []
    }] */
    try {
        const patientData = req.body;
        const newPatient = await PatientService.createPatient(patientData);
        res.json(newPatient);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.update = async (req, res) => {
    /* 	#swagger.tags = ['Patient']
        #swagger.description = 'Endpoint to update patient' */

    /* #swagger.security = [{
            "apiKeyAuth": []
    }] */
    try {
        const { id } = req.params;
        const patientData = req.body;
        const updatedPatient = await PatientService.updatePatient(id, patientData);
        res.json(updatedPatient);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.findAll = async (req, res) => {
    /* 	#swagger.tags = ['Patient']
        #swagger.description = 'Endpoint to list patients' */

    /* #swagger.security = [{
            "apiKeyAuth": []
    }] */
    try {
        const patient = await PatientService.findAllPatients();
        res.json(patient);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.findById = async (req, res) => {
    /* 	#swagger.tags = ['Patient']
        #swagger.description = 'Endpoint to find a specific patient' */

    /* #swagger.security = [{
            "apiKeyAuth": []
    }] */
    try {
        const { id } = req.params;
        const patient = await PatientService.findPatientById(id);
        res.json(patient);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.findByEmployeeId = async (req, res) => {
    /* 	#swagger.tags = ['Patient']
        #swagger.description = 'Endpoint to find all patients by employee' */

    /* #swagger.security = [{
            "apiKeyAuth": []
    }] */
    try {
        const { id } = req.params;
        const patients = [];
        const employePatientDataArray = await EmployeePatient.findAll({ where: { employeeId: id } });
        for (const employePatientData of employePatientDataArray) {
            patients.push(await PatientService.findPatientById(employePatientData.patientId));
        }
        res.json(patients);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.update = async (req, res) => {
    /* 	#swagger.tags = ['Employee']
        #swagger.description = 'Endpoint to edit specific employee' */

    /* #swagger.security = [{
            "apiKeyAuth": []
    }] */
    const patientData = req.body;

    try {
        const updatedPatient = await PatientService.updatePatient(patientData.id, patientData);
        res.json({ newUser: updatedPatient });
    } catch (error) {
        console.error('Error al actualizar paciente:', error);
        res.status(500).json({ message: 'Error al actualizar paciente: ' + error });
    }
};

exports.delete = async (req, res) => {
    /* 	#swagger.tags = ['Employee']
        #swagger.description = 'Endpoint to delete specific employee' */

    /* #swagger.security = [{
            "apiKeyAuth": []
    }] */

    try {
        const { id } = req.params;
        console.log('id', id);
        const user = await PatientService.deletePatient(id);
        res.json({ user });
    } catch (error) {
        console.error('Error al buscar usuario:', error);
        res.status(500).json({ message: 'Error al buscar usuario: ' + error });
    }
};