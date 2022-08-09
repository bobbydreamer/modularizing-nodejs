function add(x, y) {
    inputs(x,y)
    return x + y;
}
  
function subtract(x, y) {
    inputs(x,y)
    return x - y;
}

function multiply(x, y) {
    inputs(x,y)
    return x * y;
}

function inputs(x, y) {
    console.log(`Inputs: x=${x}; y=${y}`)    
}

const pi = 3.14159;
  
module.exports = { addNumbers:add, subtract, multiply, pi };