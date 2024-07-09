require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

const budgetController = require('./src/controller/BudgetController');
const db = require('./src/model/index');

const app  = express();
const { sequelize } = db;
app.set('view engine', 'pug');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(budgetController);

sequelize.authenticate().then(() => {
    app.listen(process.env.API_PORT, () => {
        console.log(`Listening on ${process.env.API_PORT}`);
    });
}).catch(error => {
    console.log('Unable to connect to db', error);
    return process.exit(22);
});
