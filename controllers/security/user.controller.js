const userService = require('../../services/security/user.service');

exports.create = async (req, res) => {
    /* 	#swagger.tags = ['User']
        #swagger.description = 'Endpoint to create new user' */

    /* #swagger.security = [{
            "apiKeyAuth": []
    }] */
    const userData = req.body;

    try {
        const newUser = await userService.createNewUser(userData);
        res.json({ newUser });
    } catch (error) {
        console.error('Error al crear usuario:', error);
        res.status(500).json({ message: 'Error al crear usuario: ' + error });
    }
};

exports.updatePassword = async (req, res) => {
    /* 	#swagger.tags = ['User']
        #swagger.description = 'Endpoint to update user password' */

    /* #swagger.security = [{
            "apiKeyAuth": []
    }] */
    const { username, oldPassword, newPassword } = req.query;

    try {
        const user = await userService.updatePassword(username, oldPassword, newPassword);
        res.json({ user });
    } catch (error) {
        console.log('Error al actualizar contraseña:', error);
        res.status(500).json({ message: 'Error al actualizar contraseña: ' + error });
    }
};

exports.findByUsername = async (req, res) => {
    /* 	#swagger.tags = ['User']
        #swagger.description = 'Endpoint to find a specific user' */

    /* #swagger.security = [{
            "apiKeyAuth": []
    }] */
    const { username } = req.query;

    try {
        const user = await userService.findByUsername(username);
        res.json({ user });
    } catch (error) {
        console.error('Error al buscar usuario:', error);
        res.status(500).json({ message: 'Error al buscar usuario: ' + error });
    }
};

exports.findAll = async (req, res) => {
    /* 	#swagger.tags = ['User']
        #swagger.description = 'Endpoint to list users' */

    /* #swagger.security = [{
        "apiKeyAuth": []
    }] */
    try {
        const users = await userService.findAll();
        res.json({ users });
    } catch (error) {
        console.error('Error al obtener usuarios:', error);
        res.status(500).json({ message: 'Error al obtener usuarios: ' + error });
    }
}

exports.edit = async (req, res) => {
    /* 	#swagger.tags = ['User']
        #swagger.description = 'Endpoint to edit specific user' */

    /* #swagger.security = [{
            "apiKeyAuth": []
    }] */
    const userData = req.body;

    try {
        const newUser = await userService.updateUser(userData.id, userData);
        res.json({ newUser });
    } catch (error) {
        console.error('Error al actualizar usuario:', error);
        res.status(500).json({ message: 'Error al crear usuario: ' + error });
    }
};

exports.delete = async (req, res) => {
    /* 	#swagger.tags = ['User']
        #swagger.description = 'Endpoint to delete specific user' */

    /* #swagger.security = [{
            "apiKeyAuth": []
    }] */

    try {
        const { id } = req.params;
        console.log('id', id);
        const user = await userService.deleteUser(id);
        res.json({ user });
    } catch (error) {
        console.error('Error al buscar usuario:', error);
        res.status(500).json({ message: 'Error al buscar usuario: ' + error });
    }
};