function countdown(callback){
  window.setTimeout(callback, 2000);
};

function createMultiplier(multiplierValue){
    return function(givenValue){
    var finalValue = givenValue * multiplierValue
    return finalValue
  }

};

var doubler = createMultiplier(2)
var tripler = createMultiplier(3)

function multiplier(multiplierValue, givenValue){
  return multiplierValue * givenValue
}

var doublerWithBind = multiplier.bind(null, 2);

var triplerWithBind = multiplier.bind(null, 3);
