import { useState, memo } from 'react';

const Child = memo(() => {
	console.log('render child');
	
	return (
		<h1>
			Child
		</h1>
	)
})

export default function HelloState({ isCondition }) {
	console.log('render hello state');
	
	// [ true, setter(newValue) => void]
	// const arr = useState( true );
	// const isTextVisible = arr[0];
	// const setIsTextVisible = arr[1];
	
	/**
	 * 
	 
	 iterable
	 
	 // counter = 0;
	 state[counter] => state[0]
	 
	 // counter++
	 
	 state[counter] => state[1]
	 counter++
	 
	 state[counter] => state[2]
	 
	 
	 state = [
		 
		 {foo: 'bar'},
		 true,
		 {firstName: 'Pigletshvily', lastName: 'Chaitovski'}
		 
	 ]
	 
	 */
	
	// if (isCondition) {
	const [ isTextVisible, setIsTextVisible ] = useState( true );	
	// }
	
	
	const [ somethingBoolean, setSomethingBoolean ] = useState( true );
	
	const [ cuteDog, setCuteDog ] = useState({firstName: 'Pigletshvily', lastName: 'Chaitovski'})
	
	const toggleText = () => {
		setIsTextVisible(!isTextVisible);
		
		// setIsTextVisible({foo: 'bar'})
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

