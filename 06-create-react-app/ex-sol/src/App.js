import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Login from './components/Login/Login';

function App() {
  return (
    <div className="App">
      <Header />
	  <div className="container">
	  	<div></div>
	  	<Login />
		  
		<Footer />
	  </div>
	  
    </div>
  );
}

export default App;
