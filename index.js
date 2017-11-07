//countdown function with a callback argument
function countdown(callback) {
//waiting 2 seconds before calling callback, passed through countdown
  window.setTimeout(callback, 2000);
};

function createMultiplier(multiplierValue) {
  //below is a function taking the value and * by the multiplierValue
  return (val) => {return val * multiplierValue};
}

var doubler = createMultiplier(2);
var tripler = createMultiplier(3);

//taking two arguments and multiplying them
function multiplier(a, b){
  return a * b;
}

var doublerWithBind = multiplier.bind(2, null);
var triplerWithBind = multiplier.bind(3, null);
//bind () allows us to easily set which specific object will be bound to this when a function or method is invoked.
