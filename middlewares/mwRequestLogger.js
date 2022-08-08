const requestLogger = (request, response, next) => {
    console.log(`${new Date().toLocaleString()} : ${request.method} url:: ${request.url}`);
    next();
};
  
module.exports = { requestLogger }