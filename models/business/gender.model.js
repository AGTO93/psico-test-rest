const { DataTypes, Sequelize } = require('sequelize');
const sequelize = require('../../config/database');

const Gender = sequelize.define('Gender', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
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
    schema: 'business',
    tableName: 'genders',
    timestamps: true,
    underscored: true,
});

module.exports = Gender;
