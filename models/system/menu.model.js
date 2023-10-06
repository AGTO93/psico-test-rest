const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database');
const Role = require('../security/role.model')

const Menu = sequelize.define('Menu', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    url: {
        type: DataTypes.STRING
    },
    roleId: {
        type: DataTypes.UUID,
        allowNull: false
    },
    enabled: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
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
    schema: 'system',
    tableName: 'menues',
    timestamps: true,
    underscored: true,
});

Role.hasMany(Menu);
Menu.belongsTo(Role);

module.exports = Menu;
