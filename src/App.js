
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import StartScreen from './components/StartScreen';
import Quiz from './components/Quiz';
import Score from './components/Score';
import './App.css';
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={StartScreen} />
        <Route exact path="/Quiz" component={Quiz} />
        <Route exact path="/score" component={Score} />
      </Switch>
    </div>
  );
}

export default App;