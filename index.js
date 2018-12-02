function countdown(callBackFn) {
  //takes one argument, callback, which is a function.
  //use window.setTimeout() we will wait two seconds
  //before calling the callback function.
  setTimeout(callBackFn, 2000); //two seconds
  //setTimeout(function(){alert("hello");},2000)
   // now call passed in function
}

function createMultiplier(multiplier) {
  return function(nbr) {
    return multiplier * nbr;
  }
}

var doubler = createMultiplier(2);

var tripler  = createMultiplier(3);

function multiplier(val1, val2) {
  return val1 * val2;
}
function createMultiplierBonus(val1, val2)
{
  console.log(`val1: ${val1}, val2: ${val2}`);
  return val1 * val2;
}

var doublerWithBind = multiplier.bind(null, 2);
var triplerWithBind = multiplier.bind(null, 3);
