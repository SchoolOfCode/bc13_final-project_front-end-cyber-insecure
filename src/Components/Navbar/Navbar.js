import React from 'react'
import { useNavigate } from 'react-router-dom'

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
        <div>
        <h1> Buttons below are the navbar </h1>
            <button onClick={navigateHome}> Dashboard </button>
            <button onClick={navigateApplications}> My applications</button>
            <button onClick={navigateInterviewPrep}> Interview Prep</button>
            <button onClick={navigatePortfolio}> Perfect your portfolio</button>
        </div>
    )
}
