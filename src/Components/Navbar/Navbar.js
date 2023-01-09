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

    const navigatePortfolio = () => {
        navigate('/portfolio', { replace: true })
    }

    return (
        <div className='navbar-container'>
            <button onClick={navigateHome}> Dashboard </button>
            <button onClick={navigateApplications}> My applications</button>
            <button onClick={navigateInterviewPrep}> Interview Prep</button>
            <button onClick={navigatePortfolio}> Perfect your portfolio</button>
        </div>
    )
}
