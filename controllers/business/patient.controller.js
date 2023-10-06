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