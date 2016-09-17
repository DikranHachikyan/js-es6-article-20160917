"use strict"

function createUser(user,plan = 'developer'){
	if( typeof user == 'undefined' || user.trim().length == 0) 
		throw "Undefined or empty user name!";

	console.log(`Create new user ${user}, plan ${plan}, payment ${payment}`);
}

createUser('John');
createUser('Smith', 'basic');
createUser(); //Raise Error:Undefined or empty user name


