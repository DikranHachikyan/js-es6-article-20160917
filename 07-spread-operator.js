"use strict"

let data = [1,2,3];

function suma(a, b, c){
	return a + b + c;
}

console.log( suma(...data ) );

let values = [ 4, 5, ...data, 7, 8];

console.log(values);