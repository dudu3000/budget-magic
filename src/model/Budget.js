const { Sequelize, DataTypes, QueryTypes, uuidv4 } = require('sequelize');
const index = require('./index');
const sequelize = index.sequelize;

const Budget = sequelize.define('Budget', {
    uuid: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false
    },
    type: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    ammount: {
        type: DataTypes.BIGINT,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, 
{
  timestamps: true,
});

module.exports = Budget;