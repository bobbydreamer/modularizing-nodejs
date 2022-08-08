const express = require('express');
const app = express();

/************************************************/
// Middleware

// Simple request time logger
app.use((req, res, next) => {
    console.log("A new request received at " + Date.now());
    next();  
});

/************************************************/
// Routes
require('./routes')(app);

/************************************************/
// Final Invalid Route
app.get('*', (req, res) => {
    res.send('404! This is an invalid URL.');
});

/************************************************/
// Listener
app.listen(3000, () => console.log('Example app listening on port 3000!'));