function countdown(callback) {
  window.setTimeout(() => callback(), 2000)
}

function createMultiplier(multiplierValue) {
  return (value) => {
    return value * multiplierValue
  }
}

 var doubler = createMultiplier(2)
 var tripler = createMultiplier(3)

function multiplier(val1, val2) {
  return val1 * val2
}

var doublerWithBind = multiplier.bind(null, 2)

var triplerWithBind = multiplier.bind(null, 3)
