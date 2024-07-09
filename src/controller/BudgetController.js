const express = require('express');
const router = express.Router();
const Budget = require('../model/Budget');
const BudgetUtil = require('../util/BudgetUtil');

var message = 'Bine ai venit pe pagina de buget';

router.get('/', async (req, res, next) => {
    try{
        const records = await Budget.findAll();

        records.map((record) => {
            record.is_mandatory = record.is_mandatory ? 'Da' : 'Nu';
            record.is_investment = record.is_investment ? 'Da' : 'Nu';
            record.date = BudgetUtil.formatDate(record.createdAt);
        })
    
        res.render('home', {
            title: 'BudgetMagic',
            message: message,
            tableValues: records
        });
    }catch (err) {
        next(err, req, res, next);
    }
});

router.post('/submit', async (req, res, next) => {
    try{
        const option = req.body.dropdown;
        const isMandatory = req.body.isMandatory === 'on';
        const isInvestment = req.body.isInvestment === 'on';
        const { ammount, name, investmentReturn, reason } = req.body;
    
        await Budget.create({
            type: option,
            ammount: ammount,
            name: name,
            is_mandatory: isMandatory,
            is_investment: isInvestment,
            investment_return_percentage: investmentReturn,
            reason: reason
        });
    
        message = `${name} a adaugat cu succes ${ammount} la categoria ${option}`;
        res.redirect('/');
        res.status(200);
    }catch (err) {
        next(err, req, res, next);
    }
});

module.exports = router;
