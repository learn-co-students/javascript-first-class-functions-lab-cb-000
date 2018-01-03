function countdown(callback) {
  setTimeout(callback, 2000);
}

function createMultiplier(multiplier) {
  return function(number) {
    return number * multiplier;
  }
}

var doubler = createMultiplier(2);

var tripler = createMultiplier(3);


function multiplier(x, y) {
  return x * y;
}

var doublerWithBind = multiplier.bind(null, 2);

var triplerWithBind = multiplier.bind(null, 3);
