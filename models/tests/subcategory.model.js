const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database');
const Category = require('./category.model');

const Subcategory = sequelize.define('Subcategory', {
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
    categoryId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
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
    tableName: 'subcategories',
    timestamps: true,
    underscored: true,
});

Category.hasMany(Subcategory);
Subcategory.belongsTo(Category);

module.exports = Subcategory;
