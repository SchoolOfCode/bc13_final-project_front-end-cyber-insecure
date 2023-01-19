
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

    console.log("This is our current APP", currentApp);

    // useEffect calls below getAllApplications function 
  useEffect(() => {
    getAllApplications()
    apply()
  }, [])


  function apply (){
    getAllApplications()
    console.log("This is the test",currentApp);
    for (let i = 0; i<currentApp.length; i++){
        if (currentApp[i].progress === 2){
            setReadyToApply(readyToApply + 1)
        }
    }
  }

  // GET request for all applications for specific email address logged in
  async function getAllApplications() {
    const titleObject = await fetch(`${url}/api/jobApplications/${currentUser.email}`);
    let data = await titleObject.json();
    setCurrentApp(data.payload);
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
                        <p className="dashboard-cards-text">This is our text </p>
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
                        <p className="dashboard-cards-text">You have {currentApp.length} applications and you are ready to apply for {readyToApply} jobs!</p>
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
                        <p className="dashboard-cards-text">This is our text </p>
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
                            <p className="dashboard-cards-text">This is our text </p>
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
                            <p className="dashboard-cards-text">This is our text </p>
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
                            <p className="dashboard-cards-text">This is our text </p>
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
