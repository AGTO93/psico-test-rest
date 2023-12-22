const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../../models/security/user.model');

// Función para autenticar al usuario y generar el token
exports.authenticateUser = async (username, password) => {
    const user = await User.findOne({
        where: { username },
    });

    if (!user || !await bcrypt.compare(password, user.password)) {
        throw new Error('Credenciales inválidas');
    }

    const token = jwt.sign({ username }, process.env.JWT_SECRET, {
        expiresIn: '3h',
    });

    return token;
};

exports.validateActiveJsonWebToken = async (token) => {
    try {
        const verify = jwt.verify(token, process.env.JWT_SECRET);
        const active = (verify) ? true : false;
        return {
            'active': active,
        };
    } catch (error) {
        return false;
    }
};
