import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';
import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useAuth } from '../contexts/AuthContext';
import { Alert } from 'react-bootstrap';
import deVault from '../../Images/deVault.png'

export default function Navbar() {
  const [hamburger, setHamburger] = useState(true);
  const [error, setError] = useState('');
  const { logOut } = useAuth();

  const navigate = useNavigate();

  async function handleLogout() {
    setError('');

    try {
      await logOut();
      navigate('/login', { replace: true });
    } catch {
      setError('Failed to log out');
    }
  }

  const navigateHome = () => {
    navigate('/', { replace: true });
  };

  const navigateApplications = () => {
    navigate('/applications', { replace: true });
  };

  const navigateInterviewPrep = () => {
    navigate('/interviewprep', { replace: true });
  };

  const navigateCV = () => {
    navigate('/cv-workshop', { replace: true });
  };

  const navigateKnowledgebank = () => {
    navigate('/knowledge-bank', { replace: true });
  };

  const navigateQuizzes = () => {
    navigate('/quizzes', { replace: true });
  };

  const navigatePortfolio = () => {
    navigate('/portfolio', { replace: true });
  };

  const navigateSuggestContent = () => {
    navigate('/suggest-content', { replace: true });
  };

  const navigateAboutUs = () => {
    navigate('/about-us', { replace: true });
  };

  return (
    <div className={hamburger ? 'navbar-container' : 'navbar-open'}>
      {error && <Alert variant="danger">{error}</Alert>}
      <div className="hamburger">
        <button onClick={() => setHamburger(!hamburger)} id="hamburger">
          <GiHamburgerMenu />
        </button>
      </div>
      <img onClick={navigateHome} className='devault-icon' src={deVault} alt=''/>
      <div className={hamburger ? 'navbar-links' : 'hamburger-open'}>
        <button onClick={navigateHome}> Dashboard </button>
        <button onClick={navigateApplications}> My applications</button>
        <button onClick={navigateInterviewPrep}> Interview prep</button>
        <button onClick={navigatePortfolio}> Perfect your portfolio</button>
        <button onClick={navigateCV}> CV workshop </button>
        <button onClick={navigateKnowledgebank}> Knowledge bank </button>
        <button onClick={navigateQuizzes}> Quizzes </button>
        <button onClick={navigateSuggestContent}> Suggest content </button>
        <button onClick={navigateAboutUs}> About us </button>
        <button onClick={handleLogout}> Log out </button>
      </div>
    </div>
  );
}
