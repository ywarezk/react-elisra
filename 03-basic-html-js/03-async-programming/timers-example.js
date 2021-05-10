
// will run something in the future
// -------o--|---->
setTimeout(
	() => {
		console.log('this will run once');		
	},
	2000
);

// runs periodically
// ----o----o----o----o----->
setInterval(
	() => {
		console.log('this will run infinite every 2 sec');	
	},
	2000
)