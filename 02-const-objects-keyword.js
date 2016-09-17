"use strict"

const app = {
	title: 'My Blog',
	logo: '/images/logo.png'
};

console.log(app.title);
console.log(app.logo);

delete app.title; //Ok
delete app.logo;  //Ok
console.log(app);     // empty object {}

app.scripts = '/js/'; // adds new key - Ok
app = { mail: 'me@site.com'} //TypeError: Assignment to constant variable.

console.log(app);
