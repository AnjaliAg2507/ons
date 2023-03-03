
import React from 'react';
import { Link } from 'react-router-dom';
import './Score.css';


const Score = ({ score, totalQuestions, restartQuiz }) => {
  return (
    <div className="score-section">

      <img src={require('../images/a3.gif')} alt="Your GIF" id="my-gif"></img>

     
      <h2>Quiz Completed!</h2>
      <p>You scored {score} out of {totalQuestions}.</p>
      <div className="button-container">
        <button onClick={restartQuiz}>Restart</button>
        <Link to="/"><button>Home</button></Link>
      </div>
    </div>
  );
};

export default Score;









