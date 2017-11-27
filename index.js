function countdown(callback) {
  setTimeout(function () {
    callback();
  }, 2000);
}

function createMultiplier(multiplyValue) {
  return function (val) {
    return multiplyValue * val;
  };
}

function multiplier(x, y) {
  return x * y;
}

var doubler = createMultiplier(2);
var tripler = createMultiplier(3);

var doublerWithBind = multiplier.bind(null, 2);
var triplerWithBind = multiplier.bind(null, 3);
