const { DataTypes, Sequelize } = require('sequelize');
const sequelize = require('../../config/database');
const Gender = require('./gender.model');
const City = require('./city.model');
const Country = require('./country.model');
const User = require('../security/user.model');
const EmployeePatient = require('./employee-patient.model');
const DocumentType = require('./document-type.model');

const Employee = sequelize.define('Employee', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    lastname: {
        type: DataTypes.STRING,
        allowNull: false, 
    },
    dateOfBirth: {
        type: DataTypes.DATE
    },
    genderId: {
        type: DataTypes.UUID,
        allowNull: false,
    },
    documentTypeId: {
        type: DataTypes.UUID,
        allowNull: false,
    },
    documentNumber: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    address: {
        type: DataTypes.STRING
    },
    phoneNumber: {
        type: DataTypes.STRING,
    },
    cityId: {
        type: DataTypes.UUID,
        allowNull: false,
    },
    countryId: {
        type: DataTypes.UUID,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
    },
    userId: {
        type: DataTypes.UUID,
        allowNull: false,
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
    tableName: 'employees',
    timestamps: true,
    underscored: true,
});

Gender.hasMany(Employee);
Employee.belongsTo(Gender);
City.hasMany(Employee);
Employee.belongsTo(City);
Country.hasMany(Employee);
Employee.belongsTo(Country);
User.hasOne(Employee);
Employee.belongsTo(User);
DocumentType.hasMany(Employee);
Employee.belongsTo(DocumentType);
Employee.hasMany(EmployeePatient);
EmployeePatient.belongsTo(Employee);

module.exports = Employee;
