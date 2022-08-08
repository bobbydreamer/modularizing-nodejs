var fetch = require('node-fetch'); // for making external API requests


module.exports = function(app){

    app.get('/posts/one', (req, res) => {
        const post = {blogID: "1", title: "Hello World!"};
        res.json(post);
    });
    
    
    app.get('/posts/two', (req, res) => {
        const post = {blogID: "2", title: "CSS is Sciencce, i am not a science guy"};
        res.json(post);
    });
    
    app.get('/posts/three', (req, res, next) => {
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
    app.get('/posts/four', (req, res, next) => {
        Promise.resolve().then(() => {
            console.log('Post Four')
            res.send('Post Four')
            throw new Error('BROKEN')
        }).catch(next) // Errors will be passed to Express.
    });
          
  }
  

