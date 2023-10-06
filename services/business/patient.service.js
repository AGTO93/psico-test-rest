const Patient = require('../../models/business/patient.model');

exports.createPatient = async (data) => {
    try {
        return await Patient.create(data);
    } catch (error) {
        throw error;
    }
};

exports.updatePatient = async (id, data) => {
    try {
        const patient = await Patient.findByPk(id);
        if (!patient) {
            throw new Error('Patient not found');
        }

        await patient.update(data);
        return patient;
    } catch (error) {
        throw error;
    }
};

exports.findAllPatients = async () => {
    try { 
        return await Patient.findAll();
    } catch (error) {
        throw error;
    }
}

exports.findPatientById = async (id) => {
    try {
        const country = await Patient.findByPk(id);
        if (!country) {
            throw new Error('Patient not found');
        }
        return country;
    } catch (error) {
        throw error;
    }
}

