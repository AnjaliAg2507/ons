
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import StartScreen from './components/StartScreen';
import Quiz from './components/Quiz';
import Score from './components/Score';
import Practice from './components/Practice';
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <div className="start-screen-background">
            <StartScreen />
          </div>
        </Route>
        <Route exact path="/Quiz">
          <div className="quiz-background">
            <Quiz />
          </div>
        </Route>
        <Route exact path="/Practice">
          <div className="practice-background">
            <Practice />
          </div>
          </Route>
        
      </Switch>
    </div>
  );
}

export default App;


