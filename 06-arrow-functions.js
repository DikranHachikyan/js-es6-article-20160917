"use strict"

function split(text,delim){
	return text.trim().split(delim);
}

console.log( split('John|Mary|Peter|Sam','|'));

//ES6
let split1 = (text, delim) => {
				return text.trim().split(delim);
			}

console.log(split1('John|Mary|Peter|Sam','|'));
// or
let split2 = (text,delim) => text.trim().split(delim);

console.log( split2('John|Mary|Peter|Sam','|'));