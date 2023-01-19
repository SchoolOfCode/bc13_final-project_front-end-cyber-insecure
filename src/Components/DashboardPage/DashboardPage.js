
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import "./DashboardPage.css";
import cv from '../../Images/cv.png'
import applications from '../../Images/applications.png'
import interviewprep from '../../Images/interviewprep.png'
import knowledge from '../../Images/knowledge.png'
import portfolio from '../../Images/portfolio.png'
import quiz from '../../Images/quiz.png'

import { useAuth } from "../contexts/AuthContext";
import React, { useState, useEffect } from "react";

const url = process.env.REACT_APP_BACKEND_URL


export default function DashboardPage() {

    const { currentUser } = useAuth();
    const [currentApp, setCurrentApp] = useState([])
    const [readyToApply, setReadyToApply] = useState(0)
    const [quizzesCompleted, setQuizzesCompleted] = useState(0)

    // useEffect calls below getAllApplications function 
    useEffect(() => {
        getAllApplications()
        apply()
        checkEmailForQuiz()
    }, [])


    async function apply() {
        let count = 0
        let data = await getAllApplications()
        for (let i = 0; i < data.length; i++) {
            if (data[i].progress === 2) {
                count++
                setReadyToApply(count)
            }
        }
    }

    // GET request for all applications for specific email address logged in
    async function getAllApplications() {
        const titleObject = await fetch(`${url}/api/jobApplications/${currentUser.email}`);
        let data = await titleObject.json();
        setCurrentApp(data.payload);
        return data.payload;
    }

    async function checkEmailForQuiz() {
        const titleObject = await fetch(`${url}/api/quizzes/${currentUser.email}`);
        let data = await titleObject.json();
        setQuizzesCompleted(data.payload[0].completed)
    }

    const navigate = useNavigate();

    const navigateApplications = () => {
        navigate('/applications', { replace: true });
    };

    const navigateInterviewPrep = () => {
        navigate('/interviewprep', { replace: true });
    };

    const navigatePortfolio = () => {
        navigate('/portfolio', { replace: true });
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




    return [
        <Navbar />,
        <div className="dashboard-page-cont">
            <div className="dashboard-header">
                <h1>Everything you need for job preparation in one place</h1>
            </div>
            <div className="dashboard-cards">
                <a className="dashboard-card" onClick={navigateInterviewPrep}>
                    <div className="dashboard-card-header">
                        <h1> Interview Prep </h1>
                    </div>
                    <div className="dashboard-card-main">
                        <img className="dashboard-cards-icons" src={interviewprep} />
                        <p className="dashboard-cards-text">Learn how to answer general questions, technical questions and ask effective questions to employers.  </p>
                    </div>
                    <div className="dashboard-card-footer">
                        <p>
                            Find all the essential knowledge and material you need for a
                            junior developer interview
                        </p>
                    </div>
                </a>

                <a className="dashboard-card" onClick={navigateApplications}>
                    <div className="dashboard-card-header">
                        <h1> My applications </h1>
                    </div>
                    <div className="dashboard-card-main">
                        <img className="dashboard-cards-icons" src={applications} />
                        <p className="dashboard-cards-text">You have {currentApp.length} job application(s) and you're ready to apply for {readyToApply}.</p>
                    </div>

                    <div className="dashboard-card-footer">
                        <p>Track all of your job applications easily and in one place </p>
                    </div>
                </a>

                <a className="dashboard-card" onClick={navigatePortfolio}>
                    <div className="dashboard-card-header">
                        <h1> Perfect your portfolio </h1>
                    </div>
                    <div className="dashboard-card-main">
                        <img className="dashboard-cards-icons" src={portfolio} />
                        <p className="dashboard-cards-text"> Use our annotated examples of GitHub pages and portfolio sites for inspiration. </p>
                    </div>
                    <div className="dashboard-card-footer">
                        <p>Learn all you need to perfect your portfolio before you apply</p>
                    </div>
                </a>
            </div>

            <div className="dashboard-other-container">
                <div className="dashboard-cards">
                    <a className="dashboard-card" onClick={navigateKnowledgebank}>
                        <div className="dashboard-card-header">
                            <h1> Knowledge Bank </h1>
                        </div>
                        <div className="dashboard-card-main">
                            <img className="dashboard-cards-icons" src={knowledge} />
                            <p className="dashboard-cards-text">Brush up on a variety of topics, including: JavaScript, HTML, CSS and much more. </p>
                        </div>
                        <div className="dashboard-card-footer">
                            <p>Use our knowledge bank to sharpen up on particular topics</p>
                        </div>
                    </a>

                    <a className="dashboard-card" onClick={navigateCV}>
                        <div className="dashboard-card-header">
                            <h1> CV Workshop </h1>
                        </div>
                        <div className="dashboard-card-main">
                            <img className="dashboard-cards-icons" src={cv} />
                            <p className="dashboard-cards-text">Look at our annotated CV examples across job roles to improve your job chances. </p>
                        </div>
                        <div className="dashboard-card-footer">
                            <p>Use our CV tips to make yours stand out from the crowd</p>
                        </div>
                    </a>

                    <a className="dashboard-card" onClick={navigateQuizzes}>
                        <div className="dashboard-card-header">
                            <h1>Quizzes</h1>
                        </div>
                        <div className="dashboard-card-main">
                            <img className="dashboard-cards-icons" src={quiz} />
                            <p className="dashboard-cards-text">Quizzes completed: {quizzesCompleted}</p>
                        </div>
                        <div className="dashboard-card-footer">
                            <p>Use our wide range of quizzes to master your understanding</p>
                        </div>
                    </a>
                </div>
            </div>
        </div>,
    ];
}
