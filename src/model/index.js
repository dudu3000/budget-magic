const Sequelize = require('sequelize');

const sequelize = new Sequelize({
    dialect: process.env.DATABASE_DIALECT,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    database: process.env.DATABASE_NAME
});

exports.sequelize = sequelize;

const { Budget } = require('./Budget');

sequelize.sync();

exports.db = {
    Budget: Budget
};
