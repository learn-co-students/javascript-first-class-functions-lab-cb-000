var countdown = cb => {
  window.setTimeout(() => {
    cb()
  }, 2000)
}

var createMultiplier = multiplyValue => {
  return value => {
    return multiplyValue * value
  }
}

var multiplier = (a, b) => {
  return a * b
}

var doubler = createMultiplier(2)
var tripler = createMultiplier(3)
var doublerWithBind = multiplier.bind(null, 2)
var triplerWithBind = multiplier.bind(null, 3)
