const userService = require('../../services/security/user.service');

exports.create = async (req, res) => {
    /* 	#swagger.tags = ['User']
        #swagger.description = 'Endpoint to create a user' */

    /* #swagger.security = [{
            "apiKeyAuth": []
    }] */
    const { username, password } = req.body;

    try {
        const newUser = await userService.createNewUser(username, password);
        res.json({ newUser });
    } catch (error) {
        console.error('Error al crear usuario:', error);
        res.status(500).json({ message: 'Error al crear usuario: ' + error });
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