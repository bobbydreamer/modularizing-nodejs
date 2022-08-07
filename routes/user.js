var express = require('express');
var router = express.Router();

//Middleware that is specific to this router
router.use((req, res, next) => {
    console.log(`USER :${Date.now()} : ${req.method} url:: ${req.url}`);
  next();
});

router.get('/', (req, res) => res.send('Hello World!'));

 
router.get('/profile', (req, res) => {
    res.send('profile Page');
});


router.get('/signout', (req, res) => {
    res.send('signout');
});


module.exports = router;
