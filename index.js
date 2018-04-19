/*function countdown(callback) {
  window.setTimeout(callback, 2000);
}

function createMultiplier(inp, m_val) {
  return inp * m_val;
}

var doubler = createMultiplier(inp, 2);

var tripler = createMultiplier(inp, 3); */

function multiplier(arg1, arg2) {
  return arg1 * arg2
}

var doublerWithBind = multiplier(2, arg2);

var triplerWithBind = multiplier(3, arg2);
