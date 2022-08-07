var express = require('express');
const fsPromises = require('fs').promises
var app = module.exports = express();

var allUsers = require('./user-api')

/************************************************/
//Middleware that is specific to this router
app.use((req, res, next) => {
    console.log(`USER :${Date.now()} : ${req.method} url:: ${req.url}`);
  next();
});


/************************************************/
// Routes
app.get('/user', (req, res) => res.send('User Page'));

 
app.get('/user/profile', (req, res, next) => {
    fsPromises.readFile('./private/SBL.txt', { encoding: 'utf8' })
    .then(data => res.send(data.toString()))
    .catch(err => next(err)) 
});


app.get('/user/signout', (req, res) => {
    res.send('signout');
});


app.get('/user/allusers', (req, res) => {
    allUsers.all_users(function(err, users){
        res.send(users)
    })
});
