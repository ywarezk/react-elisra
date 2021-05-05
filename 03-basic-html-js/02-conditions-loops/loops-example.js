/**

loops in javascript

 */
 
for (let i=0; i<10; i++) {
	console.log('will run 10 times');
}

while(condition) {
	console.log('do something while condition is happening');
}

do {
	console.log('do something alteast once');
}while(condition);


const mygreetings = ['hello', 'watsapp', 'foo', 'bar'];
// [5, 7, ]

function iterateFunction(greeting) {
	
}

mygreetings.forEach(iterateFunction);

function mapFn(greeting) {
	return greeting.length;
}

mygreetings.map(mapFn)


mygreetings.map(function(greeting) {
	
})

mygreetings.map((greeting) => {
	
})

