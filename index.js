function countdown(callback){
  setTimeout(callback, 2000);
}

function multiplierValue(value){
  return function(num) {
    return num * value
  }
}

function createMultiplier(val){
  return multiplierValue(val)
}

var doubler = createMultiplier(2)

var tripler = createMultiplier(3)

function multiplier(multiplierValue, value){
  return num1 * num2
}
