"use strict"

let msg = 'Hello JS';

function show(){
	let a=1;
	if( true){
		let b=2;
		console.log('b=',b);
	}
	console.log('msg=',msg);
	console.log('a=',a);
	console.log('b=',b);
}

show();