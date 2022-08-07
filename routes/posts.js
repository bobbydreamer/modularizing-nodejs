var express = require('express');
var router = express.Router();


router.get('/one', (req, res) => {
    const post = {blogID: "1", title: "Hello World!"};
    res.json(post);
});


router.get('/two', (req, res) => {
    const post = {blogID: "2", title: "CSS is Sciencce, i am not a science guy"};
    res.json(post);
});


module.exports = router;
