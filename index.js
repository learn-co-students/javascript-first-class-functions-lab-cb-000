function countdown(callback)
{
  window.setTimeout(callback, 2000);
}

function createMultiplier(multiplierValue)
{
  function multiply( value) {
      return value * multiplierValue;
  }
  return multiply();
}
var doubler = createMultiplier(2)
var tripler = createMultiplier(3)

function multiplier( x,y )
{
  return x * y;
}
var doublerWithBind = multiplier.bind( null, 2);
var triplerWithBind = multiplier.bind( null, 3);
