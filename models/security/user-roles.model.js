const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database');
const User = require('./user.model');
const Role = require('./role.model');

const UserRole = sequelize.define('UserRole', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    userId: {
        type: DataTypes.UUID,
        allowNull: false,
    },
    roleId: {
        type: DataTypes.UUID,
        allowNull: false,
    },
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
    updatedAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
}, {
    schema: 'security',
    tableName: 'user_roles',
    timestamps: true,
    underscored: true,
});

module.exports = UserRole;
