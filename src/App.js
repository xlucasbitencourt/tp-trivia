import React from 'react';
// import logo from './trivia.png';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Game from './pages/Game';
import './App.css';
import Settings from './pages/Settings';

export default function App() {
  return (
    <Switch>
      <Route path="/" exact component={ Login } />
      <Route path="/game" exact component={ Game } />
      <Route path="/settings" exact component={ Settings } />
    </Switch>

  );
}
