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

/************************************************/
// Routes
// -- Notice
// * One Advantage using this technique .use() is it loads the middleware function in it.
// * When you call http://localhost:3000/books/12 middleware in ./routes/homepages alone get triggered.
app.use(require('./routes/homepages'));  //http://localhost:3000/    http://localhost:3000/about
app.use("/main",require('./routes/homepages'));  //http://localhost:3000/main  http://localhost:3000/main/about

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
let server = app.listen(3000, function () {
    console.log(`Example app listening at http://localhost:${server.address().port}`)  
});