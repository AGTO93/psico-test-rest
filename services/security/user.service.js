const bcrypt = require('bcrypt');
const User = require('../../models/security/user.model');
const UserRole = require('../../models/security/user-roles.model');
const Role = require('../../models/security/role.model');

// Función para autenticar al usuario y generar el token
exports.createNewUser = async (data) => {

    const { username, password, role, enabled } = data;

    // Encriptar la contraseña utilizando bcrypt
    const hashedPassword = await bcrypt.hash(password, 10);

    // Crea un nuevo usuario en la base de datos
    const newUser = await User.create({
        username,
        password: hashedPassword,
        enabled
    });

    // asignando el rol al usuario creado
    try {
        console.log('el rol a buscar y asignar es', role);
        const roleData = await Role.findOne({ where: { name: role } })
        console.log('roleData', JSON.stringify(roleData));
        await UserRole.create({
            userId: newUser.id,
            roleId: roleData.id,
        });
    } catch (error) {
        console.log('eliminando el usuario', newUser.username);
        await User.destroy({ where: { id: newUser.id } });
        throw error;
    }

    return newUser;
};

exports.updateUser = async (id, data) => {
    try {
        const user = await User.findByPk(id);
        const { username, password, role, enabled } = data;

        if (!user) {
            throw new Error('User not found');
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        // Crea un nuevo usuario en la base de datos
        const updatedUser = await User.update({
            username,
            password: hashedPassword,
            enabled
        },
            { where: { id: user.id } });

        // asignando el rol al usuario creado
        try {
            console.log('el rol a buscar y asignar es', role);
            const roleData = await Role.findOne({ where: { name: role } })
            console.log('roleData', JSON.stringify(roleData));
            await UserRole.update({
                roleId: roleData.id,
            }, { where: { userId: user.id } });
        } catch (error) {
            throw error;
        }
        return updatedUser;
    } catch (error) {
        throw error;
    }
};

exports.deleteUser = async (id) => {
    try {
        const user = await User.destroy({ where: { id: id } });
        if (!user) {
            throw new Error('User not found');
        }

        return user;
    } catch (error) {
        throw error;
    }
};

exports.updatePassword = async (username, oldPassword, newPassword) => {
    const user = await User.findOne({ where: { username } });
    const isPasswordValid = await bcrypt.compare(oldPassword, user.password);

    if (isPasswordValid) {
        const hashedPassword = await bcrypt.hash(newPassword, 10);

        user.password = hashedPassword;
        await user.save();

        return user;
    } else {
        throw new Error('Credenciales inválidas');
    }
};

exports.findByUsername = async (username) => {
    console.log('username', username);
    const user = await User.findOne({
        where: { username },
    });

    return user;
}

exports.findAll = async () => {
    /* const users = await User.findAll();

    for (const user of users) {
        const userRole = await UserRole.findOne({ where: { userId: user.id } });
        const role = await Role.findOne({ where: { id: userRole.roleId } });
        user.role = role;
    } */

    const users = await User.findAll();
    const usersWithRoles = [];

    for (const user of users) {
        const userRole = await UserRole.findOne({ where: { userId: user.id } });
        const role = await Role.findOne({ where: { id: userRole.roleId } });

        // Crear un nuevo objeto que incluya la propiedad role
        const userWithRole = {
            ...user.dataValues,
            role: role.dataValues,
        };

        usersWithRoles.push(userWithRole);
    }

    return usersWithRoles;
}
