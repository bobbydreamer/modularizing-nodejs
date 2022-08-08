const fsPromises = require('fs').promises


module.exports = function(app){

    //Middleware that is specific to this router
    app.use((req, res, next) => {
        console.log(`USER :${Date.now()} : ${req.method} url:: ${req.url}`);
    next();
    });

    app.get('/user', (req, res) => res.send('Hello World!'));

    
    app.get('/user/profile', (req, res, next) => {

        fsPromises.readFile('./private/SBL.txt', { encoding: 'utf8' })
        .then(data => res.send(data.toString()))
        .catch(err => next(err)) 

    });


    app.get('/user/signout', (req, res) => {
        res.send('signout');
    });
  
}
  
