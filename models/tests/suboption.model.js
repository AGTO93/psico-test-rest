const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database');
const Option = require('./option.model');

const Suboption = sequelize.define('Suboption', {
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
    optionId: {
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
    tableName: 'suboptions',
    timestamps: true,
    underscored: true,
});

Option.hasMany(Suboption);
Suboption.belongsTo(Option);

module.exports = Suboption;
