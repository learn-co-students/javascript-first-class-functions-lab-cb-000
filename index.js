function countdown(callback) {
  setTimeout(callback, 2000);
}

function createMultiplier(multiplierValue) {
  return function(value) {
    return value * multiplierValue;
  };
}


var doubler = function(value) {
  return createMultiplier(value)(2);
};


var tripler = function(value) {
  return createMultiplier(value)(3);
};

function multiplier(multiplierValue, value) {

  return value * multiplierValue;

}




var doublerWithBind = multiplier.bind(null, 2);
var triplerWithBind = multiplier.bind(null, 3);
