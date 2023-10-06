const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database');
const Version = require('./version.model');
const AnswerState = require('./answer-state.model');
const Employee = require('../business/employee.model');
const Patient = require('../business/patient.model');

const Answer = sequelize.define('Answer', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    versionId: {
        type: DataTypes.UUID,
        allowNull: false
    },
    employeeId: {
        type: DataTypes.UUID,
        allowNull: false
    },
    patientId: {
        type: DataTypes.UUID,
        allowNull: false
    },
    stateId: {
        type: DataTypes.UUID,
        allowNull: false
    },
    value: {
        type: DataTypes.JSONB,
        allowNull: false
    },
    total: {
        type: DataTypes.INTEGER,
        defaultValue: 0
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
    tableName: 'answers',
    timestamps: true,
    underscored: true,
});

Version.hasMany(Answer);
Answer.belongsTo(Version);
AnswerState.hasMany(Answer, { foreignKey: 'stateId'});
Answer.belongsTo(AnswerState);
Employee.hasMany(Answer);
Answer.belongsTo(Employee);
Patient.hasMany(Answer);
Answer.belongsTo(Patient);

module.exports = Answer;
