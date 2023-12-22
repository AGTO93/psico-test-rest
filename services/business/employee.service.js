const Employee = require('../../models/business/employee.model');

exports.createEmployee = async (data) => {
    try {
        return await Employee.create(data);
    } catch (error) {
        throw error;
    }
};

exports.updateEmployee = async (id, data) => {
    try {
        const employee = await Employee.findByPk(id);
        if (!employee) {
            throw new Error('Employee not found');
        }

        const updatedEmployee = await Employee.update(data, { where: { id: employee.id } });

        return updatedEmployee;
    } catch (error) {
        throw error;
    }
};

exports.findAllEmployees = async () => {
    try { 
        return await Employee.findAll();
    } catch (error) {
        throw error;
    }
}

exports.findEmployeeById = async (id) => {
    try {
        const country = await Employee.findByPk(id);
        if (!country) {
            throw new Error('Employee not found');
        }
        return country;
    } catch (error) {
        throw error;
    }
}

exports.deleteEmployee = async (id) => {
    try {
        const employee = await Employee.destroy({ where: { id: id } });
        if (!employee) {
            throw new Error('Employee not found');
        }

        return employee;
    } catch (error) {
        throw error;
    }
};

