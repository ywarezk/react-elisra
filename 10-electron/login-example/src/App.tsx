import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import './App.global.css';
import Header from './components/Header';
import Login from './components/Login/Login';

const Hello = () => {
  return (
    <div>
      <h1>
        i moved to js
      </h1>
      <Login />
    </div>
  );
};

export default function App() {
  return (
    <BrowserRouter>

      <div>
        <Header />
        <nav>
          <ul>
            <li>
              <Link to="/">
                Homepage
              </Link>
            </li>
          </ul>
        </nav>

          <Switch>
            <Route path="/" component={Hello} />
          </Switch>
      </div>

    </BrowserRouter>


  );
}
