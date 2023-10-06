const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database');
const Category = require('./category.model');
const Type = require('./type.model');

const Version = sequelize.define('Version', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT
    },
    expirationDate: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    typeId: {
        type: DataTypes.UUID,
        allowNull: false
    },
    estimatedDuration: {
        type: DataTypes.INTEGER,
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
    schema: 'tests',
    tableName: 'versions',
    timestamps: true,
    underscored: true,
});

Version.hasMany(Category);
Category.belongsTo(Version);
Type.hasMany(Version);
Version.belongsTo(Type);

module.exports = Version;
