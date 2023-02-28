import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import StartScreen from './components/StartScreen';
import Quiz from './components/Quiz';
import Score from './components/Score';
/*import hcbgImage from "./images/b1.png";*/
import './App.css';

function App() {
  return (
    <Router>
   
      <div className="App" >
        <Switch>
          <Route exact path="/" component={StartScreen} />
          <Route exact path="/Quiz" component={Quiz} />
          <Route exact path="/score" component={Score} />
          
        </Switch>
      </div>
     
    </Router>
  );
}

export default App;
