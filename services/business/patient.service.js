const EmployeePatient = require('../../models/business/employee-patient.model');
const Patient = require('../../models/business/patient.model');

exports.createPatient = async (data) => {
    try {
        const patient = await Patient.create(data);

        try {
            await EmployeePatient.create({
                employeeId: data.employeeId,
                patientId: patient.id
            })
        } catch (error) {
            throw error;
        }
        return patient
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

        await Patient.update(data, { where: { id: patient.id } });

        try {
            await EmployeePatient.update({ employeeId: data.employeeId }, { where: { patientId: patient.id } });
        } catch (error) {
            throw error;
        }

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
        const patient = await Patient.findByPk(id);
        if (!patient) {
            throw new Error('Patient not found');
        }
        return patient;
    } catch (error) {
        throw error;
    }
}

exports.findAllPatientByEmployeeId = async (id) => {
    try {
        const patient = await Patient.findAll({ where: { employeeId: id } });
        if (!patient) {
            throw new Error('Patient not found');
        }
        return patient;
    } catch (error) {
        throw error;
    }
}

exports.deletePatient = async (id) => {
    try {
        const patient = await Patient.destroy({ where: { id: id } });
        if (!patient) {
            throw new Error('Patient not found');
        }

        return patient;
    } catch (error) {
        throw error;
    }
};

