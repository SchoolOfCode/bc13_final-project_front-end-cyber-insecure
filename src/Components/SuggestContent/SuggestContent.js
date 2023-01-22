import React, { useState } from 'react'
import CVform from './CVform';
import PortfolioForm from './PortfolioForm';
import KnowledgeForm from './KnowledgeForm';
import QuizForm from './QuizForm';
import InterviewForm from './InterviewForm';
import Navbar from '../Navbar/Navbar';
import Popup from 'reactjs-popup';
import './SuggestContent.css'

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

    return [
        <Navbar />,
        <div className='suggest-content-container'>
            <div className='suggest-content-header'>
                <div className='suggest-content-underlined'>
                    <h1> Suggest content for us to upload onto the site</h1>
                    <Popup
          trigger={<button className="info-button">𝒊</button>}
        >
          {(close) => (
            <div className="popup">
              <div className="popup-inner">
                <p>The suggest content feature allows you to suggest content to add to the app. 
                To do so, select a topic, and fill out the form. 
                <br/><br/>
                Your suggested content will be reviewed and added to the app if it meets our standards. 
                Thank you for contributing to deVault!</p>
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
                <div className='suggest-content-buttons'>
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
        </div>
    ]
}