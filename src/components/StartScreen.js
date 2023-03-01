import React from 'react';
import { Link } from 'react-router-dom';
import './StartScreen.css';
import Quiz from './Quiz';

function StartScreen() {
  return (
    <div className="StartScreen">
      <h1>Government of Karnataka</h1>
      <p>A fun way to learn maths!</p>
      <div className="button-container">
        <button>Practice</button> 
        <Link to="/Quiz"><button>Start Quiz</button> </Link>
      </div>
    </div>
  );
}

export default StartScreen;


