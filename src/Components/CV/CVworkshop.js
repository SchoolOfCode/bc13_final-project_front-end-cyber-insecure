import React from 'react';
import { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import frontEndDeveloper from '../../Images/frontendDeveloper.png';
import uxuiPortfolioPage from '../../Images/uxuiPortfolioPage.png';
import backendPortfolio from '../../Images/backend.png';
import fullstackPortfolio from '../../Images/fullstack.png';
import './CVworkshop.css';

export default function CVworkshop() {

  const [CVonScreen, setCVonScreen] = useState('');

  function handleFrontEnd() {
    setCVonScreen(frontEndDeveloper)
  }

  function handleFullStack() {
    setCVonScreen(fullstackPortfolio)
  }

  function handleBackend() {
    setCVonScreen(backendPortfolio)
  }

  function handleUxUi() {
    setCVonScreen(uxuiPortfolioPage)
  }

  return [
    <Navbar />,
    <div className="cvworkshop-container">
      <h1>Perfect your CV using our best-practice examples</h1>
      <div className="cvButtonContainer">
        <button onClick={handleFrontEnd} className="cvButtonStyles">Frontend Developer</button>
        <button onClick={handleFullStack} className="cvButtonStyles">Fullstack Developer</button>
        <button onClick={handleBackend} className="cvButtonStyles">Backend Developer</button>
        <button onClick={handleUxUi} className="cvButtonStyles">UX / UI Designer</button>
      </div>
      <div className="cvExamples">
        {CVonScreen &&
          <div className='individual-cv-examples'>
            <div className='individual-cv-left'>
              <img className='cv-image' src={CVonScreen} alt="frontend portfolio" />
            </div>
            {CVonScreen === frontEndDeveloper &&
              <div className='individual-cv-right'>
                <p className='cv-p'> FRONTEND Placeholder text (why the CV is good) </p>
                <button className="cvButtonStyles" onClick={() => window.open(require('../../CV-pdfs/frontendcv.pdf'), '_none')}>View and download</button>
              </div>
            }
            {CVonScreen === fullstackPortfolio &&
              <div className='individual-cv-right'>
                <p className='cv-p'> FULLSTACK Placeholder text (why the CV is good) </p>
                <button className="cvButtonStyles" onClick={() => window.open(require('../../CV-pdfs/fullstackcv.pdf'), '_none')}>View and download</button>
              </div>
            }
            {CVonScreen === backendPortfolio &&
              <div className='individual-cv-right'>
                <p className='cv-p'> BACKEND Placeholder text (why the CV is good) </p>
                <button className="cvButtonStyles" onClick={() => window.open(require('../../CV-pdfs/backendcv.pdf'), '_none')}>View and download</button>
              </div>
            }
            {CVonScreen === uxuiPortfolioPage &&
              <div className='individual-cv-right'>
                <p className='cv-p'> UI/UX Placeholder text (why the CV is good) </p>
                <button className="cvButtonStyles" onClick={() => window.open(require('../../CV-pdfs/uiuxcv.pdf'), '_none')}>View and download</button>
              </div>
            }
          </div>
        }
      </div>
    </div>,
  ];
}
