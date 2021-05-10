/**

Promise is a class that helps us deal with only!!! this async code:

-----------o---|---------------->
-----------X---------------->

 */
 
// Promise<string>
const timerPromise = new Promise((resolve, reject) => {
	// you place your async code in this function
	
	setTimeout(
		() => {
			resolve('hello from promise');
			// reject(new Error( 'our async code failed' ))
		},
		2000
	);	
});


timerPromise

	.then(
		// listen for success
		// string
		(msg) => {
			console.log(msg);
			return msg.length;
		},
		
		// listen for error
		(err) => {
			console.log('something happend: ' + err.message);
			return true;
		}
	)
	.then(
		(stringLengthOrTrue) => {
			
		}
	);
	

// 1. Promise<42>
// 2. multiple entry/exit points
async function dealWithPromiseEasily() {
	try {
		const hello = await timerPromise;
		//await fetch(...)
		console.log(hello);	
	} catch(err) {
		console.log('deal with the error');	
	}
	
	return 42;		
}

// dealWithPromiseEasily().then(
// 	(fourtyTwo) => {
		
// 	}
// )

 
 /*
 timerPromise.then(
	 // listen for success
	 (msg) => {
		 console.log(msg);
	 },
	 
	 // listen for error
	 (err) => {
		 console.log('something happend: ' + err.message);
	 }
 )
 
 timerPromise.then(
	 // listen for success
	 (msg) => {
		 console.log(msg);
	 },
	 
	 // listen for error
	 (err) => {
		 console.log('something happend: ' + err.message);
	 }
 )
 */

// -----------o---|---------------->
// -----------X---------------->
/*
fetch(
	'http://localhost:3333/api/users/login',
	{
		method: 'POST',
		body: JSON.stringify({
			email: 'yariv@nerdeez.com',
			password: '12345678'
		}),	
		headers: {
			'Content-Type': 'application/json'
		}
	}
)
*/