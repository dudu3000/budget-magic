const Sequelize = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'postgres',
    username: 'user',
    password: 'pass',
    host: 'db',
    port: 5432,
    database: 'BudgetMagic'
});

exports.sequelize = sequelize;

const { Budget } = require('./Budget');

sequelize.sync();

exports.db = {
    Budget: Budget
};