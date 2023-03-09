import React from 'react';
import { Link } from 'react-router-dom';
import './StartScreen.css';
import Quiz from './Quiz';

function StartScreen() {
  return (
    <div className="StartScreen">
    
      <img src={require('../images/logo.png')} alt="Logo" id="logo" height={200} width={200} ></img>
      
      <h1>Government of Karnataka</h1>
      <p>A fun way to learn maths!</p>
      <div className="button-container">
        <Link to="/Practice"> <button>Practice</button></Link>
        <Link to="/Quiz"><button>Start Quiz</button> </Link>
      </div>
    </div>
  );
}

export default StartScreen;


