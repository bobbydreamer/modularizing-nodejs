var express = require('express');
var router = express.Router();

const { requestLogger } = require('../middlewares/mwRequestLogger')

/************************************************/
// Middleware
router.use(requestLogger)

/************************************************/
// Routes
router.get('/', (req, res) => res.send('Hello World!'));

 
router.get('/home', (req, res, next) => {
  try{
    res.send('Home Page');
  } catch(error) {
    next(error) // calling next error handling middleware
  }  
});


router.get('/about', (req, res, next) => {
  try{
    res.send('About Page');
  } catch(error) {
    next(error) // calling next error handling middleware
  }  
});

router.get('/error', (req, res, next) => {
  try{
    console.log('Error Page');
    throw new Error("Error Page")
  } catch(error) {
    next(error) // calling next error handling middleware
  }  
});


module.exports = router;
