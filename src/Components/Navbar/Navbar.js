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
      <img className='devault-icon' src={deVault} alt=''/>
      <div className={hamburger ? 'navbar-links' : 'hamburger-open'}>
        <button onClick={navigateHome}> Dashboard </button>
        <button onClick={navigateApplications}> My Applications</button>
        <button onClick={navigateInterviewPrep}> Interview Prep</button>
        <button onClick={navigatePortfolio}> Perfect Your Portfolio</button>
        <button onClick={navigateCV}> CV workshop </button>
        <button onClick={navigateKnowledgebank}> Knowledge Bank </button>
        <button onClick={navigateQuizzes}> Quizzes </button>
        <button onClick={navigateSuggestContent}> Suggest Content </button>
        <button onClick={navigateAboutUs}> About Us </button>
        <button onClick={handleLogout}> Log Out </button>
      </div>
    </div>
  );
}
