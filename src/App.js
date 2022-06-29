import React from 'react';
import { Provider } from 'react-redux';
// import logo from './trivia.png';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import store from './redux/store';
import Settings from './pages/Settings';
import Game from './pages/Game';

export default function App() {
  return (
    <Provider store={ store }>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/settings" component={ Settings } />
        <Route exact path="/game" render={ (props) => <Game { ...props } /> } />
      </Switch>
    </Provider>

  );
}
