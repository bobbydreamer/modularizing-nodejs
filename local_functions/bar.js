// To require it as a function, it needs to be exported as a function
module.exports = function() { 
    this.adding = function(x, y) { 
        display(x,y)
        return x + y
    };
    this.subtracting = function(x, y) { 
        display(x,y)
        return x - y
    };
    this.multiplying = function(x, y) { 
        display(x,y)
        return x * y
    };
    this.display = function (x, y) {
        console.log(`Inputs: x=${x}; y=${y}`)    
    };      
    this.pii = 3.14159
}
