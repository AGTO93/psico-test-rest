const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database');
const Menu = require('./menu.model');

const Submenu = sequelize.define('Submenu', {
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
    menuId: {
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
    tableName: 'submenues',
    timestamps: true,
    underscored: true,
});

Menu.hasMany(Submenu);
Submenu.belongsTo(Menu);

module.exports = Submenu;
