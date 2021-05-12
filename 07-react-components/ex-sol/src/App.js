import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import TodoList from './components/TodoList/TodoList';

function App() {
  return (
    <div className="App">
      <Header />
	  <div className="container" style={ { marginTop: 50}}>
	  	<div>
			<Login />
			<TodoList />
		</div>
	  	
		<Footer />
	  </div>
	  
    </div>
  );
}

export default App;
