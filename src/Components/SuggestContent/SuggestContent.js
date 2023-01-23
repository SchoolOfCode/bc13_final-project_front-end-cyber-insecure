import React, { useState } from 'react';
import CVform from './CVform';
import PortfolioForm from './PortfolioForm';
import KnowledgeForm from './KnowledgeForm';
import QuizForm from './QuizForm';
import InterviewForm from './InterviewForm';
import Navbar from '../Navbar/Navbar';
import Popup from 'reactjs-popup';
import './SuggestContent.css';
import "../../Components/Ipopup.css"

export default function SuggestContent() {
  const [topic, setTopic] = useState('');

  function handleInterviewPrep() {
    setTopic('interview');
  }

  function handlePortfolio() {
    setTopic('portfolio');
  }

  function handleCV() {
    setTopic('cv');
  }

  function handleKnowledge() {
    setTopic('knowledge');
  }

  function handleQuiz() {
    setTopic('quiz');
  }

  if (topic === '')
    return [
      <Navbar />,
      <div className="suggest-content-container">
        <div className="suggest-content-header">
          <div className="suggest-content-underlined">
            <h1> Suggest content for us to upload onto the site</h1>
            <Popup trigger={<button className="info-button">𝒊</button>}>
              {(close) => (
                <div className="i-popup">
                  <div className="i-popup-inner">
                    <p>
                      The suggest content feature allows you to suggest content
                      to add to the app. To do so, select a topic, and fill out
                      the form.
                      <br />
                      <br />
                      Your suggested content will be reviewed and added to the
                      app if it meets our standards. Thank you for contributing
                      to deVault!
                    </p>
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
          <div className="suggest-content-buttons">
            <button onClick={handleInterviewPrep} className="cvButtonStyles">
              Interview prep
            </button>
            <button onClick={handlePortfolio} className="cvButtonStyles">
              Portfolio
            </button>
            <button onClick={handleCV} className="cvButtonStyles">
              CV
            </button>
            <button onClick={handleKnowledge} className="cvButtonStyles">
              Knowledge Bank
            </button>
            <button onClick={handleQuiz} className="cvButtonStyles">
              Quiz
            </button>
          </div>
        </div>
        {topic === 'cv' && <CVform />}
        {topic === 'portfolio' && <PortfolioForm />}
        {topic === 'knowledge' && <KnowledgeForm />}
        {topic === 'quiz' && <QuizForm />}
        {topic === 'interview' && <InterviewForm />}
        <div className="suggested-content-container">
          <div className="welcome-content-card">
            <h4>Welcome to the suggestions page!</h4>
            <p>
              Part of our mission is to always improve our app so we can give
              our users the best possible chance in being successful in their
              jobs searches!
            </p>
            <p>
              From the beginning we rely heavilly on feeback from our users, so
              if you have something that might help develop our features futher
              such as real interview questions you have been asked and answered,
              cv's that you have found or used to help you get a job or even a
              new job site for developers, please select the relevant tab and
              submit your suggestions.
            </p>
            <p className='thank-you'>
              Thank you for sharing your experience with us and other users.
            </p>
            <p>The Devault Team</p>
          </div>
        </div>
      </div>,
    ];
  else
    return [
      <Navbar />,
      <div className="suggest-content-container">
        <div className="suggest-content-header">
          <div className="suggest-content-underlined">
            <h1> Suggest content for us to upload onto the site</h1>
            <Popup trigger={<button className="info-button">𝒊</button>}>
              {(close) => (
                <div className="popup">
                  <div className="popup-inner">
                    <p>
                      The suggest content feature allows you to suggest content
                      to add to the app. To do so, select a topic, and fill out
                      the form.
                      <br />
                      <br />
                      Your suggested content will be reviewed and added to the
                      app if it meets our standards. Thank you for contributing
                      to deVault!
                    </p>
                    <button
                      className="close-button"
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
          <div className="suggest-content-buttons">
            <button onClick={handleInterviewPrep} className="cvButtonStyles">
              Interview prep
            </button>
            <button onClick={handlePortfolio} className="cvButtonStyles">
              Portfolio
            </button>
            <button onClick={handleCV} className="cvButtonStyles">
              CV
            </button>
            <button onClick={handleKnowledge} className="cvButtonStyles">
              Knowledge Bank
            </button>
            <button onClick={handleQuiz} className="cvButtonStyles">
              Quiz
            </button>
          </div>
        </div>
        {topic === 'cv' && <CVform />}
        {topic === 'portfolio' && <PortfolioForm />}
        {topic === 'knowledge' && <KnowledgeForm />}
        {topic === 'quiz' && <QuizForm />}
        {topic === 'interview' && <InterviewForm />}
        <div className="welcome-content-container"></div>
      </div>,
    ];
}