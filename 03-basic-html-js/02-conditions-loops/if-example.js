/**
how to branch my code with if

 */
 
console.log('hello world');
 
const condition = true;
const otherCondition = false;

if (condition) {
	// run this if true
} 
else if(otherCondition) {
	
}
else {
	// run this if false
}

// single line if
const hello = condition ? 'hello' : 'world';

// &&

// false / 'foo bar'
const foo = condition && 'foo bar';
// const foo = condition ? 'foo bar' : false

// true / 'ipsum'
const lurem = condition || 'ipsum'
// const lurem = condition ? true : 'ipsum'


switch(someString) {
	case 'hello':
		// do something
		break;
	case 'world':
		// do something else
		break;
	default:
		console.log('hello world');
		// do something if not entering anything
}


// JS Primitives

/**

number
string
boolean
NaN
Infinite
null
undefined
Symbol


 */
 
 const myArray = [];
 myArray.push('hello')
 
 const myObject = {}
 myObject['hello'] = 42;