function countdown(callback) {
  setTimeout(callback, 2000);
}

var doubler = createMultiplier(2) //
var tripler = createMultiplier(3)
//var quadrupeler = createMultiplier(4)

function createMultiplier(multiplierValue) {
  return function (x) {
    return multiplierValue * x;
  }
}

function multiplier(y, z) {
  return y * z;
}

var doublerWithBind = multiplier.bind(null, 2)
var triplerWithBind = multiplier.bind(null, 3)
