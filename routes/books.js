var express = require('express');
var router = express.Router();


router.get('/:bookId', (req, res, next) => {
    try{
        console.log(req.params.bookId)
        res.send(req.params);
      } catch(error) {
        next(error) // calling next error handling middleware
    }      
});


module.exports = router;
