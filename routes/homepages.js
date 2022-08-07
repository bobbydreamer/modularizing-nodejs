var express = require('express');
var router = express.Router();

const { requestLogger } = require('../middlewares/mwRequestLogger')

/************************************************/
// Middleware
router.use(requestLogger)

/************************************************/
// Routes
router.get('/', (req, res) => res.send('Hello World!'));

 
router.get('/home', (req, res) => {
    res.send('Home Page');
});


router.get('/about', (req, res) => {
    res.send('About');
});


module.exports = router;
