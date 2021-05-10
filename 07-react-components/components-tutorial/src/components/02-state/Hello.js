import { useState, memo } from 'react';

const Child = memo(() => {
	console.log('render child');
	
	return (
		<h1>
			Child
		</h1>
	)
})

export default function HelloState() {
	console.log('render hello state');
	
	// [ true, setter(newValue) => void]
	// const arr = useState( true );
	// const isTextVisible = arr[0];
	// const setIsTextVisible = arr[1];
	const [ isTextVisible, setIsTextVisible ] = useState( true );
	
	const toggleText = () => {
		setIsTextVisible(!isTextVisible);
	}
	
	// NO!!
	// use lifecycle of component
	// do not use render function to move to next state!!!!
	/*
	setTimeout(() => {
		setIsTextVisible(!isTextVisible);
	}, 1000)
	*/
	
	return (
		<div>
			{ isTextVisible && <h1>Hello world </h1> } 
			<button onClick={ toggleText }>
				Toggle text
			</button>
			
			<Child />
		</div>
		
	)
}

