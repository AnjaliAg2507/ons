
import React, { useState } from 'react';
import _ from 'lodash';
import { Link } from 'react-router-dom'
import './Quiz.css';

import Score from './Score';
import {quizData} from './quizData';



const Quiz = () => {
  const [questions, setQuestions] = useState(_.shuffle(quizData));
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

 

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };


  const restartQuiz = () => {
    setQuestions(_.shuffle(quizData));
    setCurrentQuestion(0);
    setShowScore(false);
    setScore(0);
  };

  return (
    <div className="quiz">
      {showScore ? (
        <Score score={score} totalQuestions={questions.length} restartQuiz={restartQuiz}/>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className="question-text">{questions[currentQuestion].question}</div>
          </div>
          <div className="answer-section">
            {_.chunk(_.shuffle(questions[currentQuestion].options), 2).map((optionChunk) => (
              <div className="answer-row">
                {optionChunk.map((option) => (
                  <button onClick={() => handleAnswerOptionClick(option === questions[currentQuestion].answer)}>
                    {option}
                  </button>
                ))}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Quiz;




















