function countdown(callback){
  window.setTimeout(callback, 2000)
}

function createMultiplier(multiplierValue){

  return n=>n*multiplierValue
}

var doubler = createMultiplier(2)
var tripler = createMultiplier(3)

function multiplier(value1, value2){
  return value1 * value2
}

var doublerWithBind = multiplier.bind(doubler)
var triplerWithBind = multiplier.bind(tripler)
