const { DataTypes, Sequelize } = require('sequelize');
const sequelize = require('../../config/database');
const Patient = require('./patient.model');
const Employee = require('./employee.model');

const EmployeePatient = sequelize.define('EmployeePatient', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    employeeId: {
        type: DataTypes.UUID,
        allowNull: false
    },
    patientId: {
        type: DataTypes.UUID,
        allowNull: false
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
    tableName: 'employee_patients',
    timestamps: true,
    underscored: true,
});

Patient.hasMany(EmployeePatient);
EmployeePatient.belongsTo(Patient);

module.exports = EmployeePatient;
