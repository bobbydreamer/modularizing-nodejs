const express = require('express');
const app = express();


// # Method 1
// module.exports in this case is exporting an object literal and the object has three functions and one variable.
// forces us to use a namespace
const foo = require("./local_functions/foo");

// # Method 2
require('./local_functions/bar')();

// # Method 3
const { add, sub, multiply, pi } = require('./local_functions/baz');

// # Method 4
const { divide } = require('./local_functions/qux');

/************************************************/
// Middleware - Simple request time logger
app.use((req, res, next) => {
    console.log("A new request received at " + Date.now());
    next();  
});


/************************************************/
// Routes

app.get('/', (req, res) => res.send('Hello World!'));

 
app.get('/add/:x/:y', (req, res) => {
    let x = req.params.x
    let y = req.params.y
    console.log(foo)
    console.log(typeof foo.addNumbers)
    console.log(typeof foo.pi)
    let result = foo.addNumbers(x,y)
    res.send(`Foo Add: ${x} + ${y} = ${result}`);
});

app.get('/sub/:x/:y', (req, res) => {
    let x = req.params.x
    let y = req.params.y
    console.log(typeof subtracting)
    console.log(typeof pii)
    let result = subtracting(x,y)
    res.send(`Bar Sub: ${x} - ${y} = ${result}`);
});

app.get('/multiply/:x/:y', (req, res) => {
    let x = req.params.x
    let y = req.params.y    
    console.log(typeof multiply)
    console.log(typeof pi)
    let result = multiply(x,y)
    res.send(`Baz Multiply: ${x} * ${y} = ${result}`);
});

app.get('/divide/:x/:y', (req, res) => {
    let x = req.params.x
    let y = req.params.y    
    console.log(typeof divide)
    console.log(typeof pi)
    let result = divide(x,y)
    res.send(`Qux divide: ${x} * ${y} = ${result}`);
});


/************************************************/
// Final Invalid Route
app.get('*', (req, res) => {
    res.send('404! This is an invalid URL.');
});

/************************************************/
// Listener
app.listen(3000, () => console.log('Example app listening on port 3000!'));