
import React, { useState, useEffect } from 'react';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import './Practice.css';

import correctImage from '../images/correct.png';
import incorrectImage from '../images/incorrect.png';
import { practiceData } from './practiceData';

const Practice = () => {
  const [questions, setQuestions] = useState(_.shuffle(practiceData));
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showFinishButton, setShowFinishButton] = useState(false);
  const [answerStatus, setAnswerStatus] = useState(null);
  const [shuffledOptions, setShuffledOptions] = useState([]);

  useEffect(() => {
    setShowFinishButton(currentQuestion === questions.length - 1);
    if (answerStatus === null) {
      setShuffledOptions(_.shuffle(questions[currentQuestion].options));
    }
  }, [currentQuestion, questions, answerStatus]);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setAnswerStatus('correct');
    } else {
      setAnswerStatus('incorrect');
    }

    setTimeout(() => {
      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < questions.length) {
        setCurrentQuestion(nextQuestion);
        setAnswerStatus(null);
      } else {
        setShowFinishButton(true);
      }
    }, 1200); 
  };

  const handleRestart = () => {
    setQuestions(_.shuffle(practiceData));
    setCurrentQuestion(0);
    setShowFinishButton(false);
    setAnswerStatus(null);
    setShuffledOptions([]);
  };

  return (
    <div className="practice-container">
      <div className="practice-question-section">
        <div className="practice-question-count">
          <span>Question {currentQuestion + 1}</span>/{questions.length}
        </div>
        <div className="practice-question-text">{questions[currentQuestion].question}</div>
        {answerStatus && (
          <div className="practice-answer-status">
            <img src={answerStatus === 'correct' ? correctImage : incorrectImage} alt={answerStatus} />
          </div>
        )}
      </div>
      <div className="practice-answer-section">
        {shuffledOptions && _.chunk(shuffledOptions, 2).map((optionChunk, i) => (
          <div className="practice-answer-row" key={i}>
            {optionChunk.map((option) => (
              <button className="practice-btn practice-btn-outline-primary" disabled={answerStatus} onClick={() => handleAnswerOptionClick(option === questions[currentQuestion].answer)}>
                {option}
              </button>
            ))}
          </div>
        ))}
      </div>
      <div className="practice-navigation-section">
        {showFinishButton ? (
          <div>
            <button onClick={handleRestart}>Restart</button>
            <Link to="/"> <button>Finish</button></Link>
          </div>
        ) : (
          <div>
            <button onClick={() => setCurrentQuestion(currentQuestion - 1)} disabled={currentQuestion === 0}>Previous</button>
            <button onClick={() => setCurrentQuestion(currentQuestion + 1)} disabled={answerStatus}>Next</button>
            {currentQuestion !== questions.length - 1 && <Link to="/"><button>Home</button></Link>}
          </div>
        )}
      </div>
    </div>
  );
};

export default Practice;



