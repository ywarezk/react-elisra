// how to declare variables in javascript

var hello = 'world';
var noValue;

let myNumber = 42;
let anotherNoValue = true;

const myObject = { hello: 'world' }
// not good i have to place a value
// const anotherNoVAlue2;

myObject['foo'] = 'bar';

console.log('hello world');

/**
            scope         number of assignments

var       functional            infinite

let           {}                infinite

const         {}					1

 */
 
 /*
  scope - where does my variable exists
  
  
 */
 
 
 function sayHello() {
	 let message = 'hello'
	 
	 if (true) {
		 let message = 'foo bar'
	 }
	 
	 console.log(message);
 }
 
 // this is wrong
//  console.log(message);