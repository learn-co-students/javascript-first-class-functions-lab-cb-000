function countdown(callback) {
  setTimeout(callback, 2000);
}

function createMultiplier(multiplierValue) {
  return (value) => { return value * multiplierValue }
}

function multiplier(num1, num2) {
  return num1 * num2
}

var doublerWithBind = multiplier.bind(null, 2)
var triplerWithBind = multiplier.bind(null, 3)

function createMultiplierBonus(multiplierValue) {
  return multiplier.bind(null, multiplierValue)
}

var doubler = createMultiplierBonus(2)
var tripler = createMultiplierBonus(3)

// NOTE: Had to initialize with 'var' for the test to
// pass. Not sure why. with 'const' or 'let' it would
// give an 'ReferenceError: doublerWithBind is not defined'
