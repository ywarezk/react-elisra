/**

3..2..1..0

 */

import { useEffect, useState } from "react"


export default function Countdown(
	{
		wasteYourself
	}
) {
	// currentCount - t0 - 3
	// currentCount - t1 - 2
	const [currentCount, setCurrentCount] = useState(3);
	
	// timer logic
	// ngOnDestroy
	// ngOnDestroy + ngDidCheckDestroy
	// ---o---o---o---o------->
	// clear
	useEffect(
		() => {
			const intervalId = setInterval(() => {
				setCurrentCount((reallyCurrentCountdown) => {
					return reallyCurrentCountdown - 1;
				});
			}, 1000);	
			
			return function() {
				// cleans the previous run of useEffect before 
				// running the new useEffect
				clearInterval(intervalId);
			}
			
		},
		[
			
		]
	)
	
	// destroy logic
	useEffect(
		() => {
		
			if (currentCount === 0) {
				wasteYourself(false);
			}
		
		}, 
		[
			currentCount
		]
	)
	
	const handleSomthing = () => {
		setCurrentCount();
	}
	
	// setInterval(() => {}, 1000);
	
	return (
		<h1>
			{ currentCount }
		</h1>
	)
}