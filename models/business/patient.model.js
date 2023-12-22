const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database');
const Gender = require('./gender.model');
const City = require('./city.model');
const Country = require('./country.model');
const DocumentType = require('./document-type.model');

const Patient = sequelize.define('Patient', {
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
    tableName: 'patients',
    timestamps: true,
    underscored: true,
});

Gender.hasMany(Patient);
Patient.belongsTo(Gender);
City.hasMany(Patient);
Patient.belongsTo(City);
Country.hasMany(Patient);
Patient.belongsTo(Country);
DocumentType.hasMany(Patient);
Patient.belongsTo(DocumentType);

module.exports = Patient;
