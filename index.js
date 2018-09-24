const countdown = (callback) => {
  setTimeout(callback, 2000)
}

const createMultiplier = (num) => {
  return (otherNum) => num * otherNum
}

doubler = createMultiplier(2)
tripler = createMultiplier(3)

const multiplier = (num1, num2) => {
  return num1 * num2
}

const doublerWithBind = multiplier.bind(null, 2)
const triplerWithBind = multiplier.bind(null, 3)
