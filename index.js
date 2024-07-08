const express = require('express');
const budgetController = require('./src/controller/BudgetController');

const app  = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.set('view engine', 'pug');
app.use(express.json());
app.use(budgetController);

app.listen(3001, () => {
    console.log('Listening on 3001');
});