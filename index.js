const express = require('express');
const app = express();


/************************************************/
// Middleware

app.set('view engine', 'pug');
app.set('views', './views');

app.use((req, res, next) => {
    console.log("Just another middleware : " + Date.now());
    next();  
});

/************************************************/
// Routes

app.get('/', (req, res) => res.send('Hello World!'));


app.get('/hello', (req, res) => {
    res.render('index', { title: 'Hello from Pug', message: 'Hello World!' });
});

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