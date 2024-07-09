const express = require('express');
const router = express.Router();
const Budget = require('../model/Budget');

var message = 'Bine ai venit pe pagina de buget';

router.get('/', async (req, res) => {
    const records = await Budget.findAll();
    records.map((record) => {
        record.is_mandatory = record.is_mandatory ? 'Da' : 'Nu';
        record.is_investment = record.is_investment ? 'Da' : 'Nu';
    })

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
    const isMandatory = req.body.isMandatory === 'Da';
    const isInvestment = req.body.isInvestment === 'Da';
    const investmentReturn = req.body.investmentReturn;
    message = `${name} a adaugat cu succes ${ammount} la categoria ${option}`;

    console.log(isMandatory)
    console.log(isInvestment)
    console.log(req.body)
    await Budget.create({
        type: option,
        ammount: ammount,
        name: name,
        is_mandatory: isMandatory,
        is_investment: isInvestment,
        investment_return_percentage: investmentReturn
    });

    res.redirect('/');
    res.status(200);
});

module.exports = router;