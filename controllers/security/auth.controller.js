const authService = require('../../services/security/auth.service');

exports.login = async (req, res) => {
    const { username, password } = req.body;

    try {
        /* 	#swagger.tags = ['Security']
        #swagger.description = 'Endpoint to sign in a specific user' */
        const token = await authService.authenticateUser(username, password);
        res.json({ token });
    } catch (error) {
        console.error('Error al iniciar sesión:', error);
        res.status(500).json({ message: 'Error al iniciar sesión' });
    }
};

exports.validateActiveJWT = async (req, res) => {
    /* 	#swagger.tags = ['Security']
        #swagger.description = 'Endpoint to validate active JSON Web Token' */
    try {
        console.log('headers', req.headers);
        const tokenHeader = req.headers['authorization'];
        const token = tokenHeader.replace('Bearer ', '');
        console.log('token controller', token);
        const activeToken = await authService.validateActiveJsonWebToken(token);
        console.log('activeToken', activeToken);
        if (activeToken) {
            res.json({ message: 'El token está activo.' });
        } else {
            res.status(401).json({ message: 'El token no es válido o ha expirado.' });
        }
    } catch (error) {
        console.error('Error al validar token:', error);
        res.status(500).json({ message: 'Error al validar token' });
    }
};
