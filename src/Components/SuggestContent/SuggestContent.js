import React, { useState } from 'react'
import { FileUploader } from './FileUploader'
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

    return (
        <div className='suggest-content-container'>
            <h1> Suggest content for us to upload onto the site</h1>
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
            {topic === 'cv' && <FileUploader />}
        </div>
    )
}