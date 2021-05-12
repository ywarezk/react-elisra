import { useEffect, useState } from "react"


export default function CityList(
	{
		search
	}
) {
	
	const [cities, setCities] = useState([]);
	
	useEffect(
		() => {
			
			fetch(`http://nztodo.herokuapp.com/api/tasks/?format=json&search=${search}`)
				.then(
					(response) => {
						return response.json();
					}
				)
				.then((cities) => {
					setCities(cities);
				})
		},
		[
			search
		]
	)
	
	return (
		<ul>
			<li></li>
		</ul>
	)
}