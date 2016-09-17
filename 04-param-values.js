"use strict"
//Old synax
function createUser(user,plan){
	if( typeof user == 'undefined' || user.trim().length == 0) 
		throw "Undefined or empty user name!";
	plan = (typeof plan == 'undefined')? 'developer': plan;

	console.log('New user ' + user + ', plan ' + plan);
}
createUser('John');
createUser('Smith', 'basic');
createUser(); //Raise Error:Undefined or empty user name


