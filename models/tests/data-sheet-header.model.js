const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database');

const DataSheetHeader = sequelize.define('DataSheetHeader', {
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
    informant: {
        type: DataTypes.STRING,
        allowNull: true,
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
    tableName: 'data_sheet_header',
    timestamps: true,
    underscored: true,
});

module.exports = DataSheetHeader;
