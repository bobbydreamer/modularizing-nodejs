// tjholowaychuk's way : https://vimeo.com/56166857
const express = require('express');
const app = express();

const homepages = require('./routes/homepages')
const books = require('./routes/books')
const number = require('./routes/number')
const posts = require('./routes/posts')
const user = require('./routes/user')
const wiki = require('./routes/wiki')

/************************************************/
// Middleware

// Simple request time logger
app.use((req, res, next) => {
    console.log("A new request received at " + Date.now());
    next();  
});

/************************************************/
// Routes
app.use(homepages)
app.use(books)
app.use(number)
app.use(posts)
app.use(user)
app.use(wiki)

/************************************************/
// Final Invalid Route
app.get('*', (req, res) => {
    res.send('404! This is an invalid URL.');
});

/************************************************/
// Listener
app.listen(3000, () => console.log('Example app listening on port 3000!'));