const express = require('express');
const budgetController = require('./src/controller/BudgetController');

const app  = express();
const bodyParser = require('body-parser');
const db = require('./src/model/index');
const { sequelize } = db;

app.use(bodyParser.urlencoded({ extended: false }));
app.set('view engine', 'pug');
app.use(express.json());
app.use(budgetController);

sequelize.authenticate().then(() => {
    app.listen(3001, () => {
        console.log('Listening on 3001');
    });
}).catch(error => {
    console.log('Unable to connect to db', error);
    return process.exit(22);
});