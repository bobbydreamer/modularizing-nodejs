var express = require('express');
var app = module.exports = express();

/************************************************/
// Routes
app.get('/books/:bookId', (req, res, next) => {
    try{
        console.log(req.params.bookId)
        res.send(req.params);
      } catch(error) {
        next(error) // calling next error handling middleware
    }      
});

