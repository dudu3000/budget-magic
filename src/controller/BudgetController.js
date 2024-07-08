const express = require('express');
const router = express.Router();

var message = 'Bine ai venit pe pagina de buget';

router.get('/', (req, res) => {

    res.render('home', {
        title: 'BudgetMagic',
        message: message
    });
});

router.post('/submit', (req, res) => {
    const option = req.body.dropdown;
    const ammount = req.body.number;
    message = `Ai adaugat cu succes ${ammount} la categoria ${option}`;

    res.redirect('/');
    res.status(200);
});

module.exports = router;