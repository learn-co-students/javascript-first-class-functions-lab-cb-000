function countdown(callback){
	window.setTimeout(callback, 2000);
}

function createMultiplier(multiplierValue){
	return function(givenValue){
		return multiplierValue * givenValue;};
}

var doubler = createMultiplier(2);
var tripler = createMultiplier(3);

function multiplier(n, y){
	return n * y;
}

function doublerWithBind(){
	multiplier(2);
}

function triplerWithBind(){
	multiplier(3);
}

var multiplierX = multiplier.bind(null,2);
