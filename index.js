

function countdown(callback){
  setTimeout(callback, 2000);
}

function createMultiplier(number){
  return function(value){
    return (number * value);
  }
}

function multiplier(num1, num2){
  return (num1*num2)
}

var doubler = createMultiplier(2);
var tripler = createMultiplier(3);
var doublerWithBind = multiplier.bind(null, 2);
var triplerWithBind = multiplier.bind(null, 3);
