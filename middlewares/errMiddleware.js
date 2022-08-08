const errorLogger = (err, request, response, next) => {
    console.log( `Error : ${err.message}`) 
    next(err) // calling next middleware
}
  
const errorResponder = (err, request, response, next) => {
  response.header("Content-Type", 'application/json')
    
  const status = err.status || 400
  response.status(status).send(`Error : Url: ${request.url}; Message:${err.message}`)
}

const invalidPathHandler = (request, response, next) => {
  response.status(400)
  response.send('404! This is an invalid URL.')
}
  
module.exports = { errorLogger, errorResponder, invalidPathHandler }