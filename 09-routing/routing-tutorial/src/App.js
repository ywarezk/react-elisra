import logo from './logo.svg';
import './App.css';
import { Route, Switch, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import Error404Page from './pages/Error404Page';

function App() {
  return (
    <div className="App">
		<nav>
			<ul>
				<li>
					<Link to="/"> Home page </Link>
				</li>
				<li>
					<Link to="/about/piglet?hello=world&foo=bar"> About page </Link>
				</li>
			</ul>
		</nav>
	
		<Switch>
			<Route path="/" exact>
				<HomePage />
			</Route>
			
			<Route path="/about/:dogName" exact>
				<AboutPage />
			</Route>
			
			<Route>
				<Error404Page />
			</Route>
		</Switch>
    </div>
  );
}

export default App;
