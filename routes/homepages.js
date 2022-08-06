var express = require('express');
var router = express.Router();

//Middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Homepages - Time: ', Date.now());
  next();
});

router.get('/', (req, res) => res.send('Hello World!'));

 
router.get('/home', (req, res) => {
    res.send('Home Page');
});


router.get('/about', (req, res) => {
    res.send('About');
});


module.exports = router;
