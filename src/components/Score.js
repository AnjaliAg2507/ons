import React from 'react';
import './Score.css';

const Score = ({ score, totalQuestions, restartQuiz }) => {
  return (
    <div className="score-section">
      <h2>Quiz Completed!</h2>
      <p>You scored {score} out of {totalQuestions}.</p>
      <button onClick={restartQuiz}>Restart Quiz</button>
    </div>
  );
};

export default Score;