const EmployeeService = require('../../services/business/employee.service');

exports.create = async (req, res) => {
    /* 	#swagger.tags = ['Employee']
        #swagger.description = 'Endpoint to create new employee' */

    /* #swagger.security = [{
            "apiKeyAuth": []
    }] */
    try {
        const EmployeeData = req.body;
        const newEmployee = await EmployeeService.createEmployee(EmployeeData);
        res.json(newEmployee);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.update = async (req, res) => {
    /* 	#swagger.tags = ['Employee']
        #swagger.description = 'Endpoint to update employee' */

    /* #swagger.security = [{
            "apiKeyAuth": []
    }] */
    try {
        const { id } = req.params;
        const employeeData = req.body;
        const updatedEmployee = await EmployeeService.updateEmployee(id, employeeData);
        res.json(updatedEmployee);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.findAll = async (req, res) => {
    /* 	#swagger.tags = ['Employee']
        #swagger.description = 'Endpoint to list employees' */

    /* #swagger.security = [{
            "apiKeyAuth": []
    }] */
    try {
        const employee = await EmployeeService.findAllEmployees();
        res.json(employee);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.findById = async (req, res) => {
    /* 	#swagger.tags = ['Employee']
        #swagger.description = 'Endpoint to find a specific employee' */

    /* #swagger.security = [{
            "apiKeyAuth": []
    }] */
    try {
        const { id } = req.params;
        const employee = await EmployeeService.findEmployeeById(id);
        res.json(employee);
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
    const userData = req.body;

    try {
        const newUser = await EmployeeService.updateEmployee(userData.id, userData);
        res.json({ newUser });
    } catch (error) {
        console.error('Error al actualizar usuario:', error);
        res.status(500).json({ message: 'Error al crear usuario: ' + error });
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
        const user = await EmployeeService.deleteEmployee(id);
        res.json({ user });
    } catch (error) {
        console.error('Error al buscar usuario:', error);
        res.status(500).json({ message: 'Error al buscar usuario: ' + error });
    }
};