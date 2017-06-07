//excercise #!
function countdown(callback) {
   window.setTimeout(callback, 2000);
}

//playing scrabble exercise #2
function createMultiplier(multiplierValue){
  return function(value){
    return multiplierValue * value;

  };
}
//exercise #3 it's part(y)(ial) time
function multiplier(arg1, arg2){
  return arg1 * arg2;
}
var doublerWithBind = multiplier.bind(2, null);
var triplerWithBind = multiplier.bind(3, null);


var doubler = createMultiplier(2);
var tripler = createMultiplier(3);
