var express = require('express');
var router = express.Router();


router.get('/:bookId', (req, res) => {
    console.log(req.params.bookId)
    res.send(req.params);
});


module.exports = router;
