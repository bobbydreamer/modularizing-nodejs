module.exports = {
    adding: function (x, y) {
        display(x,y)
        return x + y;
    },
  
    subtracting: function (x, y) {
        display(x,y)
        return x - y;
    },

    divide: function (x, y) {
        display(x,y)
        return x / y;
    },

    display: function (x, y) {
        console.log(`Inputs: x=${x}; y=${y}`)    
    },
      
    pii: 3.14159,
  };
  