import { useState } from 'react';
import './App.css';
import HelloState from './components/02-state/Hello';
import HelloEffect from './components/03-effect/HelloEffect';
import Countdown from './components/04-memory-leak/Countdown';

function App() {
	const [isExist, setIsExist] = useState(true);
	
	return (
		<div className="App">
		{/* <Hello firstName="Pigletshvily" age={8} lastName="Chaitovski" />
		<Hello firstName="Sweetness" lastName={12} /> */}
		
		{/* <HelloState /> */}
		
		{/* <HelloEffect /> */}
		
		{
			isExist && <Countdown wasteYourself={setIsExist}  />
		}
		
		</div>
	);
}

export default App;
