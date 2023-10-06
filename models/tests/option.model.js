const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database');
const Question = require('./question.model');

const Option = sequelize.define('Option', {
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
    value: {
        type: DataTypes.INTEGER
    },
    order: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
    },
    questionId: {
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
    tableName: 'options',
    timestamps: true,
    underscored: true,
});

Question.hasMany(Option);
Option.belongsTo(Question);

module.exports = Option;
