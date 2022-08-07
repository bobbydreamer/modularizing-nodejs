var express = require('express');
var router = express.Router();

router.get('/number', (req, res) => {
    res.send('Welcome to number page. In the address bar, type /number/12 to know the number type');
});

router.get('/number/:num', (req, res) => {
    let num = req.params.num
    console.log(num)

    message = ''
    if(num % 2 == 0) {
        message = `The ${num} is even.`;
    }
    else {
        message = `The ${num} is odd.`;
    }    
    res.send(message);
});


module.exports = router;
