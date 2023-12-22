const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database');

const CaseReport = sequelize.define('CaseReport', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    patientId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
    },
    employeeId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
    },
    reportSubmissionDate: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    reasonForConsultation: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    descriptionOfTheConsultant: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    recomendationsAndSuggestions: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    testsAdministered: {
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
    schema: 'tests',
    tableName: 'case_report',
    timestamps: true,
    underscored: true,
});

module.exports = CaseReport;
