const express = require('express');
const app = express();


/************************************************/
// Middleware

// Simple request time logger
app.use((req, res, next) => {
    console.log("A new request received at " + Date.now());
 
    // This function call tells that more processing is
    // required for the current request and is in the next middleware
    
    // function/route handler.
    next();  
});

app.use((req, res, next) => {
    console.log("Just another middleware : " + Date.now());
    next();  
});

//Simple request time logger for a specific route
app.use('/about', (req, res, next) => {
    console.log('Middleware for /about - ' + Date.now());
    next();
});


/************************************************/
// Routes

app.get('/', (req, res) => res.send('Hello World!'));

 
app.get('/home', (req, res) => {
    res.send('Home Page');
});


app.get('/about', (req, res) => {
    res.send('About');
});


app.get('/books/:bookId', (req, res) => {
    res.send(req.params);
});

/************************************************/
// Final Invalid Route
app.get('*', (req, res) => {
    res.send('404! This is an invalid URL.');
});

/************************************************/
// Listener
app.listen(3000, () => console.log('Example app listening on port 3000!'));