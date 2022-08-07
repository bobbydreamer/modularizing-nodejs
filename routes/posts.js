var express = require('express');
var router = express.Router();


router.get('/one', (req, res) => {
    res.send('Post one');
});


router.get('/two', (req, res) => {
    res.send('Post Two');
});


module.exports = router;
