
module.exports = function(app){

    app.get('/number', (req, res) => {
        res.send('Welcome to number page. In the address bar, type /number/12 to know the number type');
    });

    app.get('/number/:num', [cb0, cb1, cb2], (req, res) => {    
        let num = req.params.num
        console.log(num)
        console.log(req.message)
      
        res.send(req.message);
    });
        
}
  


// Preprocessing input before passing control to route
const cb0 = function (req, res, next) {
    console.log('CB0')
    let num = req.params.num

    if(num < 0){
        let err = new Error("Number < 0")
        err.statusCode = 400
        throw err    
    }
    next()
}

const cb1 = function (req, res, next) {
    console.log('CB1')
    let num = req.params.num
    message = []
    if(num % 2 == 0) {
        message.push(`OddEven : The ${num} is even.`)        
    }
    else {
        message.push(`OddEven : The ${num} is odd.`)
    }   
    req.message = message; 
    next()
}

const cb2 = (req, res, next)=>{
    console.log('CB2')
    let number = req.params.num
    let message = req.message
    let isPrime = true;

    // check if number is equal to 1
    if (number === 1) {
        message.push(`Prime : 1 is neither prime nor composite number.`)
    }
    
    // check if number is greater than 1
    else if (number > 1) {
    
        // looping through 2 to number-1
        for (let i = 2; i < number; i++) {
            if (number % i == 0) {
                isPrime = false;
                break;
            }
        }
    
        if (isPrime) {
            message.push(`Prime : ${number} is a prime number`)
        } else {
            message.push(`Prime : ${number} is a not prime number`)
        }
    }
    
    // check if number is less than 1
    else {
        message.push(`Prime : ${number} is a not prime number`)
    }    
    req.message = message; 
    next()
}

