import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import "./DashboardPage.css";
import cv from '../../Images/cv.png'
import applications from '../../Images/applications.png'
import interviewprep from '../../Images/interviewprep.png'
import knowledge from '../../Images/knowledge.png'
import portfolio from '../../Images/portfolio.png'
import quiz from '../../Images/quiz.png'

export default function DashboardPage() {
    const navigate = useNavigate();

    const navigateApplications = () => {
        navigate("/applications", { replace: true });
    };

    const navigateInterviewPrep = () => {
        navigate("/interviewprep", { replace: true });
    };

    const navigatePortfolio = () => {
        navigate("/portfolio", { replace: true });
    };

    const navigateCV = () => {
        navigate('/cv-workshop', { replace: true })
    }

    const navigateKnowledgebank = () => {
        navigate('/knowledge-bank', { replace: true })
    }

    const navigateQuizzes = () => {
        navigate('/quizzes', { replace: true })
    }

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
                        <img src={interviewprep} />
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
                        <img src={applications} />
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
                        <img src={portfolio} />
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
                            <img src={knowledge} />
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
                            <img src={cv} />
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
                            <img src={quiz} />
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
