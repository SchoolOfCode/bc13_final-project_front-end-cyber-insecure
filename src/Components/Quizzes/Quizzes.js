import React, { useState, useEffect } from 'react'
import Navbar from '../Navbar/Navbar'
import { questionsJavaScript, questionsReact, placeholderQuestion, questionsCSS, questionsTypeScript, questionsPython, questionsNode } from './questions'
import './Quizzes.css'
import { useAuth } from "../contexts/AuthContext";
import Popup from 'reactjs-popup';
import "../../Components/Ipopup.css"


const url = process.env.REACT_APP_BACKEND_URL

export default function Quizzes() {

  const [results, setResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [allQuestions, setallQuestions] = useState(placeholderQuestion)
  const [badgesArray, setBadgesArray] = useState([])
  const [currentTopic, setCurrentTopic] = useState()
  const [quizzesCompleted, setQuizzesCompleted] = useState(0)
  const { currentUser } = useAuth();

  useEffect(() => {
    if (score === 5) {
      addToCompleted();
      setQuizzesCompleted(quizzesCompleted + 1);
    }
    if (score === 5 && !badgesArray.includes(currentTopic)) {
      setBadgesArray([...badgesArray, currentTopic]);
    }
  }, [score]);

  useEffect(() => {
    checkEmailForQuiz();
    checkQuiz();
  }, [])

  async function checkEmailForQuiz() {
    const titleObject = await fetch(`${url}/api/quizzes/${currentUser.email}`);
    let data = await titleObject.json();
    if (data.payload.length === 0) {
      handleAddNewQuiz();
    } else {
      return;
    }
  }

  const initialSetUp = {
    user_email: currentUser.email,
    completed: 0
  }

  async function handleAddNewQuiz() {
    await fetch(`${url}/api/quizzes`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(initialSetUp)
    })
  }

  async function addToCompleted() {
    const titleObject = await fetch(`${url}/api/quizzes/${currentUser.email}`);
    let data = await titleObject.json();
    await fetch(`${url}/api/quizzes/${currentUser.email}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({user_email: currentUser.email, completed: data.payload[0].completed + 1}),
    });
  }

  async function checkQuiz() {
    const titleObject = await fetch(`${url}/api/quizzes/${currentUser.email}`);
    let data = await titleObject.json();
    console.log(data.payload[0].completed)
    setQuizzesCompleted(data.payload[0].completed)
}

  function chooseJavaScriptQuestions() {
    setallQuestions(questionsJavaScript);
    setCurrentTopic("https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg")
    restartQuiz()
  }

  function chooseReactQuestions() {
    setallQuestions(questionsReact);
    setCurrentTopic("https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg")
    restartQuiz()
  }

  function chooseCSSQuestions() {
    setallQuestions(questionsCSS);
    setCurrentTopic("https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg")
    restartQuiz()
  }

  function choosequestionsTypeScript() {
    setallQuestions(questionsTypeScript);
    setCurrentTopic("https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg")
    restartQuiz()
  }

  function choosequestionsPython() {
    setallQuestions(questionsPython);
    setCurrentTopic("https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg")
    restartQuiz()
  }

  function choosequestionsNode() {
    setallQuestions(questionsNode);
    setCurrentTopic("https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg")
    restartQuiz()
  }

  function questionClicked(isCorrect) {
    if (isCorrect) {
      setScore(score + 1);
    }
    if (currentQuestion + 1 < allQuestions.length) {
      setCurrentQuestion(currentQuestion + 1);
    }
    else {
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
      <div className='quiz-container-header'>
        <h1>Take part in quizzes to improve your technical skills </h1>
        <Popup
          trigger={<button className="info-button">𝒊</button>}
        >
          {(close) => (
            <div className="i-popup">
              <div className="i-popup-inner">
                <p>This app is designed to help you test your knowledge on a variety of topics, such as JavaScript, React, 
                CSS, TypeScript, Python, and Node. To get started, simply click on the quiz topic of your choice. 
                <br/><br/>
                Once you have completed the quiz, you will be rewarded with a badge for your success. 
                <br/><br/>
                The app also keeps track of your total number of successful quiz completions, so you can keep 
                track of your progress. 
                <br/><br/>
                So, go ahead and get started today!</p>
                <button
                  className="i-close-button"
                  onClick={() => {
                    console.log('modal closed ');
                    close();
                  }}
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </Popup>
      </div>

      <div className='quiz-buttons-div'>
        <button className='quiz-question-buttons' onClick={chooseJavaScriptQuestions}>JavaScript</button>
        <button className='quiz-question-buttons' onClick={chooseReactQuestions}>React</button>
        <button className='quiz-question-buttons' onClick={chooseCSSQuestions}>CSS</button>
        <button className='quiz-question-buttons' onClick={choosequestionsTypeScript}>TypeScript</button>
        <button className='quiz-question-buttons' onClick={choosequestionsPython}>Python</button>
        <button className='quiz-question-buttons' onClick={choosequestionsNode}>Node</button>
      </div>

      {results ? (

        <div className="quiz-final-results">
          <h1>Final Results</h1>
          <h2> {score} out of {allQuestions.length} correct - ({(score / allQuestions.length) * 100}%) </h2>
          <button className='quiz-question-buttons' onClick={() => restartQuiz()}>Restart quiz</button>
        </div>

      ) : (

        <div className="quiz-question-card">
          <div className='quiz-question-card-header'>
            {allQuestions === questionsJavaScript && <img className='lang-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt='' />}
            {allQuestions === questionsReact && <img className='lang-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt='' />}
            {allQuestions === questionsCSS && <img className='lang-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt='' />}
            {allQuestions === questionsTypeScript && <img className='lang-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt='' />}
            {allQuestions === questionsPython && <img className='lang-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt='' />}
            {allQuestions === questionsNode && <img className='lang-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt='' />}
            <h2>Question: {currentQuestion + 1} out of {allQuestions.length}</h2>
          </div>

          <h3 className="quiz-question-text">{allQuestions[currentQuestion].question}</h3>

          <ul className='quiz-ul'>
            {allQuestions[currentQuestion].options.map((option) => {
              return (
                <li className='quiz-li' key={option.id} onClick={() => questionClicked(option.isCorrect)}>{option.question}</li>
              );
            })}
          </ul>

          <h2>Score: {score}</h2>
          <h2> Quizzes completed: {quizzesCompleted}</h2>
        </div>
      )}
      <div>
        {badgesArray.length === 6 && <h2>Congratulations! You have all of the badges.</h2>}
        <div className='whole-badge-container'>
          <h1> My badges 🏆 </h1>
          {badgesArray.length === 0 && <p> Complete quizzes to get badges! </p>}
          <ul className='badge-container'>
            {badgesArray.map((badge) => {
              return (
                <img className='lang-icon' src={badge} alt='' />
              )
            })}
          </ul>
        </div>
      </div>
    </div>

  ]
}
