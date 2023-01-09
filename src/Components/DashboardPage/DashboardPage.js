import React, { useState } from 'react'
import { Button, Alert } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import Navbar from '../Navbar/Navbar'

export default function DashboardPage() {
    const [error, setError] = useState('')
    const { logOut } = useAuth()
    const navigate = useNavigate()

    async function handleLogout() {
        setError('')

        try {
            await logOut();
            navigate('/login', { replace: true })
        } catch {
            setError('Failed to log out')
        }
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
        <>
        <Navbar/>
            {error && <Alert variant='danger'>{error}</Alert>}

            <h1> buttons below will be the cards for the components </h1>
            <button onClick={navigateApplications}> My applications</button>
            <button onClick={navigateInterviewPrep}> Interview Prep</button>
            <button onClick={navigatePortfolio}> Perfect your portfolio</button>

            <div className='w-100 text-center mt-2'>
                <Button variant='link' onClick={handleLogout}>Log Out</Button>
            </div>
        </>

    )
}
