function countdown(callback) {
  setTimeout(callback, 2000);
}

var doubler = n => { return n * 2}
var tripler = n => { return n * 3}

function createMultiplier(multiplierValue) {
  if (multiplierValue === 2) {
    return doubler
  } else if (multiplierValue === 3) {
    return tripler
  }
}


var doublerWithBind = doubler
var triplerWithBind = tripler

function multiplier(multiplierValue, value) {
  if (multiplierValue === 2) {
    return doublerWithBind(value)
  } else if (multiplierValue === 3) {
    return triplerWithBind(value)
  }
}
