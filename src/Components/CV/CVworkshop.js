import React from 'react';
import { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import frontEndDeveloper from '../../cvImages/frontendDeveloper.png';
import uxuiPortfolioPage from '../../cvImages/uxuiPortfolioPage.png';
import backendPortfolio from '../../cvImages/backend.png';
import fullstackPortfolio from '../../cvImages/fullstack.png';
import './CVworkshop.css';

export default function CVworkshop() {
  // Frontend CVs state
  const [frontEnd, setFrontEnd] = useState(false);

  // Fullstack CVs state
  const [fullStack, setFullStack] = useState(false);

  // Backend CVs state
  const [backend, setBackend] = useState(false);

  // UX / UI
  const [uxUi, setUxUi] = useState(false);

  function handleFrontEnd() {
    setFrontEnd(true);
    setBackend(false);
    setFullStack(false);
    setUxUi(false);
  }

  function handleFullStack() {
    setFullStack(true);
    setBackend(false);
    setFrontEnd(false);
    setUxUi(false);
  }

  function handleBackend() {
    setBackend(true);
    setFrontEnd(false);
    setFullStack(false);
    setUxUi(false);
  }

  function handleUxUi() {
    setUxUi(true);
    setFrontEnd(false);
    setBackend(false);
    setFullStack(false);
  }

  return [
    <Navbar />,
    <div className="cvworkshop-container">
      <h1>CV Templates and Suggestions</h1>
      <div className="cvButtonContainer">
        <button onClick={handleFrontEnd} className="cvButtonStyles">
          Frontend Developer
        </button>
        <button onClick={handleFullStack} className="cvButtonStyles">
          Fullstack Developer
        </button>
        <button onClick={handleBackend} className="cvButtonStyles">
          Backend Developer
        </button>
        <button onClick={handleUxUi} className="cvButtonStyles">
          UX / UI Designer
        </button>
      </div>
      <div className="cvExamples">
        {frontEnd && <img src={frontEndDeveloper} alt="frontend portfolio" />}
        {frontEnd && <img src={frontEndDeveloper} alt="frontend portfolio" />}
        {frontEnd && <img src={frontEndDeveloper} alt="frontend portfolio" />}
      </div>
      <div className="cvExamples">
        {fullStack && (
          <img src={fullstackPortfolio} alt="fullstack portfolio" />
        )}
        {fullStack && (
          <img src={fullstackPortfolio} alt="fullstack portfolio" />
        )}
        {fullStack && (
          <img src={fullstackPortfolio} alt="fullstack portfolio" />
        )}
      </div>
      <div className="cvExamples">
        {backend && <img src={backendPortfolio} alt="backend portfolio" />}
        {backend && <img src={backendPortfolio} alt="backend portfolio" />}
        {backend && <img src={backendPortfolio} alt="backend portfolio" />}
      </div>
      <div className="cvExamples">
        {uxUi && <img src={uxuiPortfolioPage} alt="ux/ui portfolio" />}
        {uxUi && <img src={uxuiPortfolioPage} alt="ux/ui portfolio" />}
        {uxUi && <img src={uxuiPortfolioPage} alt="ux/ui portfolio" />}
      </div>
    </div>,
  ];
}
