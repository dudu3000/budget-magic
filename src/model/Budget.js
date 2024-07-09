const { DataTypes } = require('sequelize');
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
    },
    reason: {
        type: DataTypes.STRING,
        allowNull: true
    },
    is_mandatory: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    is_investment: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    investment_return_percentage: {
        type: DataTypes.BIGINT,
        allowNull: true
    }
}, 
{
  timestamps: true,
});

module.exports = Budget;