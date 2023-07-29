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

exports.logout = async (req, res) => {
    /* 	#swagger.tags = ['Security']
        #swagger.description = 'Endpoint to sign out user' */
    res.json({ message: 'Sesión cerrada exitosamente' });
}
