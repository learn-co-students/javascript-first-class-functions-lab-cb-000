function countdown(callback) {
  window.setTimeout(callback, 2000);
}

function createMultiplier(num) {
  return (val) => val * num;
}

var doubler = createMultiplier(2), tripler = createMultiplier(3);

function multiplier(num, dig) {
  return num * dig;
}

var doublerWithBind = multiplier.bind(null, 2), tripler.bind(null, 3);
