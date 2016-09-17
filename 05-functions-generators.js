"use strict"

function* getNextValue(){
	let i = 1;
	while(true){
		yield i++;
	}	
}
var generator = getNextValue();

console.log(generator.next()); // { value: 1, done:false}
console.log(generator.next().value); //  2
console.log(generator.next().value); //  3
generator.return(); //stop the generation of next values
console.log(generator.next()); //  {value: undefined, done:true}