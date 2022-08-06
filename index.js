const express = require('express');
const app = express();

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


// For invalid routes
app.get('*', (req, res) => {
    res.send('404! This is an invalid URL.');
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));