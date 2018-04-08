function countdown(callback) {
  setTimeout(callback, 2000);
}

function createMultiplier(multiplierValue) {
  return function(x) {
    return multiplierValue * x;
  }
}

var doubler = createMultiplier(2);
var tripler = createMultiplier(3);

function multiplier(a, b) {
  return a * b;
}

doublerWithBind = createMultiplier.bind(null, 2);
triplerWithBind = createMultiplier.bind(null, 3);
