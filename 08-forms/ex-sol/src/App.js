import { createContext } from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
// import Login from './components/Login/Login';
import LoginWithFormik from './components/Login/LoginWithFormik';
import TodoList from './components/TodoList/TodoList';
import { HelloWorld } from './context/hello.context';



function App() {
  return (
    <div className="App">
      <Header />
	  <div className="container" style={ { marginTop: 50}}>
	  	<HelloWorld.Provider value={ { message: 'hello world'}}>
			<div>
				<LoginWithFormik />
				<TodoList />
			</div>
		</HelloWorld.Provider>
	  	
		<Footer />
	  </div>
	  
    </div>
  );
}

export default App;
