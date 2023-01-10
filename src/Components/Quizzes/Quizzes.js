import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import { questionsJavaScript, questionsReact, placeholderQuestion, questionsCSS } from './questions'
import './Quizzes.css'

export default function Quizzes() {

  const [results, setResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [allQuestions, setallQuestions] = useState(placeholderQuestion)

  function chooseJavaScriptQuestions() {
    setallQuestions(questionsJavaScript);
    restartQuiz()
  }

  function chooseReactQuestions() {
    setallQuestions(questionsReact);
    restartQuiz()
  }

  function chooseCSSQuestions() {
    setallQuestions(questionsCSS);
    restartQuiz()
  }

  function questionClicked(isCorrect) {
    if (isCorrect) {
      setScore(score + 1);
    }
    if (currentQuestion + 1 < allQuestions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setResults(true);
    }
  };

  function restartQuiz() {
    setScore(0);
    setCurrentQuestion(0);
    setResults(false);
  };

  return [
    <Navbar />,

    <div className='quiz-container'>
      <h1>Take part in quizzes to improve your technical skills </h1>

      <div className='quiz-buttons-div'>
        <button className='quiz-question-buttons' onClick={chooseJavaScriptQuestions}>JavaScript Questions</button>
        <button className='quiz-question-buttons' onClick={chooseReactQuestions}>React Questions</button>
        <button className='quiz-question-buttons' onClick={chooseCSSQuestions}>CSS Questions</button>
      </div>

      {results ? (

        <div className="quiz-final-results">
          <h1>Final Results</h1>
          <h2> {score} out of {allQuestions.length} correct - ({(score / allQuestions.length) * 100}%) </h2>
          <button className='quiz-question-buttons' onClick={() => restartQuiz()}>Restart quiz</button>
        </div>

      ) : (

        <div className="quiz-question-card">
          <h2>Question: {currentQuestion + 1} out of {allQuestions.length}</h2>

          <h3 className="quiz-question-text">{allQuestions[currentQuestion].question}</h3>

          <ul className='quiz-ul'>
            {allQuestions[currentQuestion].options.map((option) => {
              return (
                <li className='quiz-li'key={option.id} onClick={() => questionClicked(option.isCorrect)}>{option.question}</li>
              );
            })}
          </ul>

          <h2>Score: {score}</h2>
        </div>
      )}
    </div>

  ]
}
