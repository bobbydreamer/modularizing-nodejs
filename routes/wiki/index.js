var express = require('express');
var app = module.exports = express();

/************************************************/
// Routes
app.get('/wiki', (req, res, next) => {
    try{
        res.send('Wiki');
      } catch(error) {
        next(error) // calling next error handling middleware
    }      
});

