const bcrypt = require('bcrypt');
const User = require('../../models/security/user.model');

// Función para autenticar al usuario y generar el token
exports.createNewUser = async (username, password) => {
    // Encriptar la contraseña utilizando bcrypt
    const hashedPassword = await bcrypt.hash(password, 10);

    // Crea un nuevo usuario en la base de datos
    const newUser = await User.create({
        username,
        password: hashedPassword,
    });

    return newUser;
};

exports.findByUsername = async (username) => {
    console.log('username', username);
    const user = await User.findOne({
        where: { username },
    });

    return user;
}

exports.findAll = async () => {
    const users = await User.findAll({ where: { enabled: true } });

    return users;
}
