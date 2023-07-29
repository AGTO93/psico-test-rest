const authService = require('../../services/security/auth.service');

exports.login = async (req, res) => {
    const { username, password } = req.body;

    try {
        // Llama al servicio de autenticación para verificar el usuario y generar el token
        const token = await authService.authenticateUser(username, password);
        res.json({ token });
    } catch (error) {
        console.error('Error al iniciar sesión:', error);
        res.status(500).json({ message: 'Error al iniciar sesión' });
    }
};
