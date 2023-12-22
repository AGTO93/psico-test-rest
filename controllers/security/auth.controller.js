const Role = require('../../models/security/role.model');
const UserRole = require('../../models/security/user-roles.model');
const User = require('../../models/security/user.model');
const Employee = require('../../models/business/employee.model');
const authService = require('../../services/security/auth.service');

exports.login = async (req, res) => {
    /* 	#swagger.tags = ['Security']
        #swagger.description = 'Endpoint to sign in a specific user' */
    const { username, password } = req.body;

    try {
        const token = await authService.authenticateUser(username, password);
        const userData = await User.findOne({ where: { username } });
        const userRoleData = await UserRole.findOne({ where: { user_id: userData.dataValues.id } });
        const roleData = await Role.findOne({ where: { id: userRoleData.dataValues.roleId } });
        const employeeData = await Employee.findOne({ where: { user_id: userData.dataValues.id } });
        res.json({
            'token': token,
            'user': {
                'userId': userData.dataValues.id,
                'username': userData.dataValues.username,
                'enable': userData.dataValues.enable,
                'roleId': roleData.dataValues.id,
                'role': roleData.dataValues.name
            }, 
            'employee': employeeData?.dataValues ? employeeData.dataValues : null
        });
    } catch (error) {
        console.error('Error al iniciar sesión:', error);
        res.status(500).json({ message: 'Error al iniciar sesión' });
    }
};

exports.validateActiveJWT = async (req, res) => {
    /* 	#swagger.tags = ['Security']
        #swagger.description = 'Endpoint to validate active JSON Web Token' */
    try {
        const tokenHeader = req.headers['authorization'];
        const token = tokenHeader.replace('Bearer ', '');
        const { active } = await authService.validateActiveJsonWebToken(token);
        if (active) {
            res.json({ active });
        } else {
            res.status(401).json({ active });
        }
    } catch (error) {
        console.error('Error al validar token:', error);
        res.status(500).json({ message: 'Error al validar token' });
    }
};
