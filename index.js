const express = require('express');
const app = express();

// Routes
const books = require('./routes/books')
const number = require('./routes/number')
const posts = require('./routes/posts')
const user = require('./routes/user')


/************************************************/
// Middleware
const { errorLogger, errorResponder, invalidPathHandler } = require('./middlewares/errMiddleware')

/************************************************/
// Routes
// -- Notice
// * One Advantage using this technique .use() is it loads the middleware function in it.
// * When you call http://localhost:3000/books/12 , you can notice the middleware in ./routes/homepages get triggered.
app.use(require('./routes/homepages'));  //http://localhost:3000/    http://localhost:3000/about
app.use("/main",require('./routes/homepages'));  //http://localhost:3000/main  http://localhost:3000/main/about

app.use(number);  //http://localhost:3000/number/12

app.use("/books",books);  //http://localhost:3000/books/12
app.use("/posts",posts);  //http://localhost:3000/posts/one
app.use("/user",user);  //http://localhost:3000/user/profile

/************************************************/
// Final Invalid Route
app.use(errorLogger)
app.use(errorResponder)
app.use(invalidPathHandler)

/************************************************/
// Listener
let server = app.listen(3000, function () {
    console.log(`Example app listening at http://localhost:${server.address().port}`)  
});