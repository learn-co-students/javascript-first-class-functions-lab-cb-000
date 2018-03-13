function countdown (callback) {
  window.setTimeout(callback, 2000)
}

function createMultiplier (multiplierValue) {
  if (multiplierValue == 2){
    return doubler
  } else {
    return tripler
  }
}

function doubler (num){
  return num * 2
}

function tripler (num) {
  return num * 3
}

function createMultiplierBonus (num) {
  if (multiplierValue == 2){
    return doubler
  } else {
    return tripler
  }
}
var doublerWithBind = doubler.bind(this.value)
var triplerWithBind = tripler.bind(this.value)

function multiplier (multiplierValue, value) {
  if (multiplierValue == 2){
    return doublerWithBind
  } else {
    return triplerWithBind
  }
  return multiplierValue * value
}
