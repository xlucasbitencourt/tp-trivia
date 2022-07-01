import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Game from './pages/Game';
import Settings from './pages/Settings';
import Feedback from './pages/Feedback';
import Ranking from './pages/Ranking';

export default function App() {
  return (
    <Switch>
      <Route path="/" exact component={ Login } />
      <Route path="/game" exact component={ Game } />
      <Route path="/settings" exact component={ Settings } />
      <Route path="/feedback" exact component={ Feedback } />
      <Route path="/ranking" exact component={ Ranking } />
    </Switch>

  );
}
