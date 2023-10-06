const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database');
const Subcategory = require('./subcategory.model');

const Question = sequelize.define('Question', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    description: {
        type: DataTypes.TEXT
    },
    order: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        allowNull: false,
    },
    subcategoryId: {
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
    tableName: 'questions',
    timestamps: true,
    underscored: true,
});

Subcategory.hasMany(Question);
Question.belongsTo(Subcategory);

module.exports = Question;
