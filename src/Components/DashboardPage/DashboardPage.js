import React, { useState } from 'react'
import { Button, Alert } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import Navbar from '../Navbar/Navbar'
import './DashboardPage.css'

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

    return [
        <Navbar />,
        <div className='dashboard-page-cont'>
            {error && <Alert variant='danger'>{error}</Alert>}

            <h1>Everything you need for job preparation in one place</h1>

            <div className='dashboard-cards'>
                <a className='dashboard-card' onClick={navigateInterviewPrep}>
                    <h1> Interview Prep </h1>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Sea_Otter_%28Enhydra_lutris%29_%2825169790524%29_crop.jpg/800px-Sea_Otter_%28Enhydra_lutris%29_%2825169790524%29_crop.jpg"/>
                    <p>Find all the essential knowledge and material you need for a junior developer interview</p>
                </a>

                <a className='dashboard-card' onClick={navigateApplications}>
                    <h1> My applications </h1>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Sea_Otter_%28Enhydra_lutris%29_%2825169790524%29_crop.jpg/800px-Sea_Otter_%28Enhydra_lutris%29_%2825169790524%29_crop.jpg"/>
                    <p>Track all of your job applications easily and in one place </p>
                </a>

                <a className='dashboard-card' onClick={navigatePortfolio}>
                    <h1> Perfect your portfolio </h1>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Sea_Otter_%28Enhydra_lutris%29_%2825169790524%29_crop.jpg/800px-Sea_Otter_%28Enhydra_lutris%29_%2825169790524%29_crop.jpg"/>
                    <p>Learn all you need to perfect your portfolio before you apply</p>
                </a>

            
            </div>
            <div className='w-100 text-center mt-2'>
                <Button variant='link' onClick={handleLogout}>Log Out</Button>
            </div>
        </div>
    ]
}
