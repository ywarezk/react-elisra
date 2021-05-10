import './App.css';
import HelloState from './components/02-state/Hello';
import HelloEffect from './components/03-effect/HelloEffect';

function App() {
  return (
    <div className="App">
      {/* <Hello firstName="Pigletshvily" age={8} lastName="Chaitovski" />
	  <Hello firstName="Sweetness" lastName={12} /> */}
	  
	  {/* <HelloState /> */}
	  
	  <HelloEffect />
    </div>
  );
}

export default App;
