var express = require('express');
var app = module.exports = express();


/************************************************/
// Routes
app.get('/', (req, res) => res.send('Hello World!'));

 
app.get('/home', (req, res, next) => {
  try{
    res.send('Home Page');
  } catch(error) {
    next(error) // calling next error handling middleware
  }  
});


app.get('/about', (req, res, next) => {
  try{
    res.send('About Page');
  } catch(error) {
    next(error) // calling next error handling middleware
  }  
});


app.get('/error', (req, res, next) => {
  try{
    console.log('Error Page');
    throw new Error("Error Page")
  } catch(error) {
    next(error) // calling next error handling middleware
  }  
});
