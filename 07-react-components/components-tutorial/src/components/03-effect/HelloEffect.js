import { useEffect, useState } from 'react';

export default function HelloEffect() {
	const [ isTextVisible, setIsTextVisible] = useState(true);
	
	// birth
	// componentDidMount
	// componentDidUpdate
	useEffect(
		() => {
			setTimeout(() => {
				setIsTextVisible(!isTextVisible);
			}, 2000)		
		},
		[]
	)
	
	
	return (
		<div>
			{ isTextVisible && <h1>Hello world </h1> } 
		</div>
	)
	
}