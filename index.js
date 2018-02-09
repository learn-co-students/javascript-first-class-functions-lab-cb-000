
function countdown(callback) {
  setTimeout(callback, 2000);
}



function createMultiplier(m){
  return function(n) {
    return n * m;
  }
}

var doubler = createMultiplier(2);
var tripler = createMultiplier(3);

function multiplier(n, m){
  return n * m;
}

var doublerWithBind = multiplier.bind(null, 2);
var triplerWithBind = multiplier.bind(null, 3);
