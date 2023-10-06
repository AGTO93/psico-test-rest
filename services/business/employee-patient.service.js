const EmployeePatient = require('../../models/business/employee-patient.model');

exports.createEmployeePatient = async (data) => {
    try {
        return await EmployeePatient.create(data);
    } catch (error) {
        throw error;
    }
};

exports.updateEmployeePatient = async (id, data) => {
    try {
        const employeePatient = await EmployeePatient.findByPk(id);
        if (!employeePatient) {
            throw new Error('Employee Patient not found');
        }

        await employeePatient.update(data);
        return employeePatient;
    } catch (error) {
        throw error;
    }
};

exports.findAllEmployeePatient = async () => {
    try { 
        return await EmployeePatient.findAll();
    } catch (error) {
        throw error;
    }
}

exports.findEmployeePatientById = async (id) => {
    try {
        const employeePatient = await EmployeePatient.findByPk(id);
        if (!employeePatient) {
            throw new Error('Employee Patient not found');
        }
        return employeePatient;
    } catch (error) {
        throw error;
    }
}

