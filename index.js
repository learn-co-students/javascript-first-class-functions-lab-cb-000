function countdown(callback) {
  setTimeout(function () {
    callback();

  },2000);
}

function createMultiplier(multipleValue) {
  return function (value) {
    return multipleValue * value;
  };

}

function multiplier(a,b) {
  return a * b;
}

var doubler = createMultiplier(2);
var tripler = createMultiplier(3);
var doublerWithBind = multiplier.bind(null, 2);
var triplerWithBind = multiplier.bind(null, 3);
