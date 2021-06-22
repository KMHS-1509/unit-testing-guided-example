console.log("Hola")

function sum(a, b) {
 if (a===undefined || b === undefined){
   return 0
 }
  return a + b
}

function subtract(a, b) {
  if(a === undefined || b === undefined){
    return 0
  }

  return a - b;
}

function divide(a, b) {
  return a/b;
}

function multiply(a, b) {
  return a * b;
}


console.log(sum(13,15))

// The following is required to make unit tests work. Please ignore it.
module.exports = { sum, subtract, divide, multiply };
