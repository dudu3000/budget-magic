const express = require('express');
const router = express.Router();
const Budget = require('../model/Budget');

var message = 'Bine ai venit pe pagina de buget';

router.get('/', async (req, res) => {
    const records = await Budget.findAll();

    res.render('home', {
        title: 'BudgetMagic',
        message: message,
        tableValues: records
    });
});

router.post('/submit', async (req, res) => {
    const option = req.body.dropdown;
    const ammount = req.body.number;
    const name = req.body.name;
    message = `${name} a adaugat cu succes ${ammount} la categoria ${option}`;

    await Budget.create({
        type: option,
        ammount: ammount,
        name: name
    });

    res.redirect('/');
    res.status(200);
});

module.exports = router;