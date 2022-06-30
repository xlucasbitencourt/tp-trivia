import React from 'react';
// import logo from './trivia.png';
import './App.css';
import { Route, Switch } from 'react-router-dom';
// import Login from './pages/Login';
import Game from './pages/Game';

export default function App() {
  return (
    <Switch>
      <Route path="/" exact component={ Login } />
      <Route path="/game" exact component={ Game } />
    </Switch>
  );
}
