const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database');
const DataSheetHeader = require('./data-sheet-header.model');

const dataSheetBody = sequelize.define('dataSheetBody', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    dataSheetHeaderId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    type: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1, // 1. motivo consulta; 2. descripción del consultante; 3. observaciones
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
    tableName: 'data_sheet_body',
    timestamps: true,
    underscored: true,
});

DataSheetHeader.hasMany(dataSheetBody);

module.exports = dataSheetBody;
