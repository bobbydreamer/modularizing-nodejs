var express = require('express');
var router = express.Router();

//This Middleware will be called for everything
router.use((req, res, next) => {
  console.log(`${Date.now()} : ${req.method} url:: ${req.url}`);
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
