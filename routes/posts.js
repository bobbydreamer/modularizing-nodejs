var express = require('express');
var fetch = require('node-fetch'); // for making external API requests
// let fetch = import('node-fetch')
var router = express.Router();


router.get('/one', (req, res) => {
    const post = {blogID: "1", title: "Hello World!"};
    res.json(post);
});


router.get('/two', (req, res) => {
    const post = {blogID: "2", title: "CSS is Sciencce, i am not a science guy"};
    res.json(post);
});

router.get('/three', (req, res, next) => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => {
            console.log(data)
            res.header("Content-Type",'application/json');
            res.send(JSON.stringify(data, null, 4)) // pretty print
          })
        .catch(err => next(err)) // pass to default error handler middleware
})

// Its said Promise is better than try catch method for handling errors
router.get('/four', (req, res, next) => {
    Promise.resolve().then(() => {
        console.log('Post Four')
        res.send('Post Four')
        throw new Error('BROKEN')
    }).catch(next) // Errors will be passed to Express.
});


module.exports = router;
