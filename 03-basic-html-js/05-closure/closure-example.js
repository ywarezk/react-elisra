
let message = 'hello';

setTimeout(() => {
	message = 'foo bar'
}, 1000)


// closure = {message: pointer to the message variable}
function sayHello() {
	let message = 'hello pigletshvily';
	console.log(message);	
}


sayHello();