const express = require('express');
const router = express.Router();
const fsPromises = require('fs').promises

//Middleware that is specific to this router
router.use((req, res, next) => {
    console.log(`USER :${Date.now()} : ${req.method} url:: ${req.url}`);
  next();
});

router.get('/', (req, res) => res.send('Hello World!'));

 
router.get('/profile', (req, res, next) => {

    fsPromises.readFile('./private/SBL.txt', { encoding: 'utf8' })
    .then(data => res.send(data.toString()))
    .catch(err => next(err)) 

});


router.get('/signout', (req, res) => {
    res.send('signout');
});


module.exports = router;
