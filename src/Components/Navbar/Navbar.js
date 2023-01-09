import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
    const navigate = useNavigate()

    const navigateHome = () => {
        navigate('/', { replace: true })
    }

    const navigateApplications = () => {
        navigate('/applications', { replace: true })
    }

    const navigateInterviewPrep = () => {
        navigate('/interviewprep', { replace: true })
    }

    const navigateCV = () => {
        navigate('/cv-workshop', { replace: true })
    }

    const navigateKnowledgebank = () => {
        navigate('/knowledge-bank', { replace: true })
    }

    const navigateQuizzes = () => {
        navigate('/quizzes', { replace: true })
    }

    const navigatePortfolio = () => {
        navigate('/portfolio', { replace: true })
    }

    return (
        <div className='navbar-container'>
            <button onClick={navigateHome}> Dashboard </button>
            <button onClick={navigateApplications}> My applications</button>
            <button onClick={navigateInterviewPrep}> Interview Prep</button>
            <button onClick={navigatePortfolio}> Perfect your portfolio</button>
            <button onClick={navigateCV}> CV workshop </button>
            <button onClick={navigateKnowledgebank}> Knowledge Bank </button>
            <button onClick={navigateQuizzes}> Quizzes </button>
        </div>
    )
}
