inlets = 1;
outlets = 1;

var numStates = 4;
var model = new Array(numStates);
for(var i = 0; i < numStates; i++){
	var row = new Array(numStates);
	model[i] = row;
	for(var j = 0; j < numStates; j++){
		row[j] = 0;
	}
}

var lastHit = 0;
var lastHitWasManual = false;
 
function sum(row){
	var accum = 0;
	for(var i = 0; i < row.length; i++){
		accum += row[i];
	}
	return accum;
}
 
function modelStep(state){
	var row = model[state];
	var rand = Math.random();
	var accum = 0;
	var rowSum = sum(row);
	for(var i = 0; i < numStates; i++){
		accum += row[i];
		if(rand < accum/rowSum) return i;
	}
	return numStates;
}

function msg_int(hit){
	if(hit == 4) {
		var sampledHit = modelStep(lastHit);
		lastHitWasManual = false;
		lastHit = sampledHit;
		outlet(0, sampledHit);
	} else {
		if(lastHitWasManual) model[lastHit][hit] += 1;
		lastHitWasManual = true;
		lastHit = hit;
		outlet(0, hit);
	}
}
	
	