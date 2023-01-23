import React from 'react';
import { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import frontEndDeveloper from '../../Images/frontendDeveloper.png';
import uxuiPortfolioPage from '../../Images/uxuiPortfolioPage.png';
import backendPortfolio from '../../Images/backend.png';
import fullstackPortfolio from '../../Images/fullstack.png';
import Popup from 'reactjs-popup';
import './CVworkshop.css';
import figma from '../../Images/figma.png'
import canva from '../../Images/canva.png'
import adobe from '../../Images/adobe.png'
import miro from '../../Images/miro.png'
import "../../Components/Ipopup.css"

export default function CVworkshop() {
  const [CVonScreen, setCVonScreen] = useState('');

  function handleFrontEnd() {
    setCVonScreen(frontEndDeveloper);
  }

  function handleFullStack() {
    setCVonScreen(fullstackPortfolio);
  }

  function handleBackend() {
    setCVonScreen(backendPortfolio);
  }

  function handleUxUi() {
    setCVonScreen(uxuiPortfolioPage);
  }

  return [
    <Navbar />,
    <div className="cvworkshop-container">
      <div className="cvworkshop-container-header">
        <h1>Perfect your CV using our best-practice examples</h1>
        <Popup
          trigger={<button className="info-button">𝒊</button>}
        >
          {(close) => (
            <div className="i-popup">
              <div className="i-popup-inner">
                <p>This tool is designed to help junior developers create an effective and professional CV.
                  By clicking on the appropriate role button, you can view an example CV tailored to your desired role,
                  as well as a written explanation of why the content is good.
                  <br /><br />
                  The explanation is split into three sections - Objective / Personal Statement, Skills, and
                  Work Experience - which will help you to understand the importance of each section.
                  <br /><br />
                  If you like the CV, you can also view and download it to use as a template. Good luck with your job search!</p>
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
        {CVonScreen && (
          <div className="individual-cv-examples">
            <div className="individual-cv-left">
              <img
                className="cv-image"
                src={CVonScreen}
                alt="frontend portfolio"
              />
            </div>
            {CVonScreen === frontEndDeveloper && (
              <div className="individual-cv-right">
                <div className="card-container">
                  <h3>Objective / Personal Statement</h3>
                  <p className="cv-p">
                    This CV is a good example for other aspiring junior
                    front-end developers because it demonstrates a range of
                    experiences and skills that are relevant to the role. For
                    example, the applicant mentions their passion for coding, their experience
                    attending a coding bootcamp, and how they are able to
                    collaborate with senior developers and take on extra
                    responsibility.
                  </p>
                </div>

                <div className="card-container">
                  <h3>Skills</h3>
                  <p className="cv-p">
                    In terms of skills, the applicant includes a range of
                    technical skills such as HTML, CSS, React,
                    Mocha/Chai, Jest, and GIT/GitHub. This shows that they have
                    a good understanding of the tools and technologies used in
                    front-end development.
                  </p>
                </div>

                <div className="card-container">
                  <h3>Work Experience</h3>
                  <p className="cv-p">
                    The work experience section details two specific positions
                    the applicant held that are relevant to front-end
                    development. These include tasks such as setting up a
                    testing framework, working in an agile environment,
                    reviewing code, and developing user interfaces. This shows
                    that the applicant has had the opportunity to apply the
                    skills they have learned in a professional setting.
                  </p>
                </div>

                <button
                  className="cvButtonStyles"
                  onClick={() =>
                    window.open(
                      require('../../CV-pdfs/frontendcv.pdf'),
                      '_none'
                    )
                  }
                >
                  View and download
                </button>
              </div>
            )}
            {CVonScreen === fullstackPortfolio && (
              <div className="individual-cv-right">
                <div className="card-container">
                  <h3>Objective / Personal Statement</h3>
                  <p>
                    This is a good example for other aspiring junior full-stack
                    developers because it illustrates a number of important
                    aspects of a successful CV. The objective/personal statement
                    clearly states the applicant's relevant skills and
                    experience, as well as their passion for developing web
                    applications.
                  </p>
                </div>

                <div className="card-container">
                  <h3>Skills</h3>
                  <p>
                    The skills section is comprehensive and includes the most
                    relevant technologies for a full-stack developer.
                  </p>
                </div>

                <div className="card-container">
                  <h3>Work experience</h3>
                  <p>
                    Finally the work experience section provides concrete
                    examples of the applicant's accomplishments, making it easy
                    for a potential employer to see the value they could bring
                    to their organization.
                  </p>
                </div>

                <button
                  className="cvButtonStyles"
                  onClick={() =>
                    window.open(
                      require('../../CV-pdfs/fullstackcv.pdf'),
                      '_none'
                    )
                  }
                >
                  View and download
                </button>
              </div>
            )}
            {CVonScreen === backendPortfolio && (
              <div className="individual-cv-right">
                <div className="card-container">
                  <h3>Objective / Personal Statement</h3>
                  <p>
                    This CV is a good example for other aspiring junior back-end
                    developers because it provides a comprehensive overview of
                    the candidate's skills, experience, and objective. The
                    objective/personal statement is a good example because it
                    succinctly summarizes the candidate's experience, skills,
                    and passion for software development.{' '}
                  </p>
                </div>

                <div className="card-container">
                  <h3>Skills</h3>
                  <p>
                    The skills section is a good example because it provides a
                    detailed list of the candidate's technical capabilities and
                    software knowledge.{' '}
                  </p>
                </div>

                <div className="card-container">
                  <h3>Work experience</h3>
                  <p>
                    The work experience section is a good example because it
                    provides a detailed overview of the candidate's professional
                    experience, including specific tasks they have been
                    responsible for and the technologies they have used.
                  </p>
                </div>

                <button
                  className="cvButtonStyles"
                  onClick={() =>
                    window.open(require('../../CV-pdfs/backendcv.pdf'), '_none')
                  }
                >
                  View and download
                </button>
              </div>
            )}
            {CVonScreen === uxuiPortfolioPage && (
              <div className="individual-cv-right">
                <div className="card-container">
                  <h3>Objective / Personal Statement</h3>
                  <p className="cv-p">
                    This CV is a good example for other aspiring UX/UI designers
                    because it provides an overview of the applicant's
                    experience, skills, and education. The objective/personal
                    statement clearly states the applicant’s goal in seeking a
                    position in an environment that will challenge them while
                    allowing them to contribute to the success of the
                    organization.
                  </p>
                </div>

                <div className="card-container">
                  <h3>Skills</h3>
                  <p className="cv-p">
                    The skills section lists relevant UX/UI design skills
                    including user experience, user interface design, graphic
                    design, and visual design.
                  </p>
                </div>

                <div className="card-container">
                  <h3>Work Experience</h3>
                  <p className="cv-p">
                    The work experience section provides detailed descriptions
                    of the applicant’s responsibilities and accomplishments in
                    previous roles, as well as a list of the tools and
                    technologies used.
                  </p>
                </div>

                <button
                  className="cvButtonStyles"
                  onClick={() =>
                    window.open(require('../../CV-pdfs/uiuxcv.pdf'), '_none')
                  }
                >
                  View and download
                </button>
              </div>
            )}
          </div>
        )}
      </div>
      <div className='cv-tools-container'>
        <div className='cv-tools-container-header'>
          <h2> Popular tools used for formatting your CV </h2>
        </div>
        <div className='cv-tools-container-content'>
          <div className='cv-tools-content-ex'>
            <a href='https://www.adobe.com/' target="_blank" rel="noreferrer">
              <img src={adobe} alt='' />
              <p> Adobe</p>
            </a>
          </div>
          <div className='cv-tools-content-ex'>
            <a href='https://www.figma.com/' target="_blank" rel="noreferrer">
              <img src={figma} alt='' />
              <p> Figma</p>
            </a>
          </div>
          <div className='cv-tools-content-ex'>
            <a href='https://www.miro.com/' target="_blank" rel="noreferrer">
              <img src={miro} alt='' />
              <p> Miro </p>
            </a>
          </div>
          <div className='cv-tools-content-ex'>
            <a href='https://www.canva.com/' target="_blank" rel="noreferrer">
              <img src={canva} alt='' />
              <p> Canva </p>
            </a>
          </div>
        </div>
      </div>
    </div>,
  ];
}
