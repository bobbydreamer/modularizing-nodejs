
module.exports = function(app){

  app.get('/wiki', (req, res, next) => {
    try{
        res.send('Wiki');
      } catch(error) {
        next(error) // calling next error handling middleware
    }      
  });

}
