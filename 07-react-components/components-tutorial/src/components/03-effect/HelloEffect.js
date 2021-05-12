import { useEffect, useState } from 'react';
import CityList from './CityList';

export default function HelloEffect({
	isToggleText = true
}) {
	const [ isTextVisible, setIsTextVisible] = useState(true);
	const [ cuteDog, setCuteDog ] = useState({firstName: 'Pigletshvily', lastName: 'Chaitovski'})
	const [search, setSearch] = useState('');
	// const router = useRouter()
	
	// birth
	// componentDidMount
	// componentDidUpdate
	useEffect(
		() => {
			setTimeout(() => {
				setIsTextVisible(!isTextVisible);
			}, 2000)		
		},
		[
			// list of 
			// const [] = useState
			//
			cuteDog,
			isToggleText,
			// router			
		]
	)
	
	useEffect(
		() => {
			
		}
	)
	
	/***
	
	setTimetout(...)
	
	 */
	 
	const handleSearch = (event) => {
		const currentSearch = event.target.value;
		setSearch(currentSearch);
	}
	
	return (
		<div>
			<h1>Search</h1>
			<input type="text" onChange={handleSearch}  />
			
			<CityList search={search} />
			{ isTextVisible && <h1>Hello world </h1> } 
		</div>
	)
	
}