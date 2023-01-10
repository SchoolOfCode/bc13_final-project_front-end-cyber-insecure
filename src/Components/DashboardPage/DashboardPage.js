import React, { useState } from "react";
import { Button, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import Navbar from "../Navbar/Navbar";
import "./DashboardPage.css";

export default function DashboardPage() {
    const [error, setError] = useState("");
    const { logOut } = useAuth();
    const navigate = useNavigate();

    async function handleLogout() {
        setError("");

        try {
            await logOut();
            navigate("/login", { replace: true });
        } catch {
            setError("Failed to log out");
        }
    }

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
            {error && <Alert variant="danger">{error}</Alert>}
            <div className="dashboard-header">
                <h1>Everything you need for job preparation in one place</h1>
            </div>
            <div className="dashboard-cards">
                <a className="dashboard-card" onClick={navigateInterviewPrep}>
                    <div className="dashboard-card-header">
                        <h1> Interview Prep </h1>
                    </div>
                    <div className="dashboard-card-main">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Sea_Otter_%28Enhydra_lutris%29_%2825169790524%29_crop.jpg/800px-Sea_Otter_%28Enhydra_lutris%29_%2825169790524%29_crop.jpg" />
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
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Sea_Otter_%28Enhydra_lutris%29_%2825169790524%29_crop.jpg/800px-Sea_Otter_%28Enhydra_lutris%29_%2825169790524%29_crop.jpg" />
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
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Sea_Otter_%28Enhydra_lutris%29_%2825169790524%29_crop.jpg/800px-Sea_Otter_%28Enhydra_lutris%29_%2825169790524%29_crop.jpg" />
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
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Sea_Otter_%28Enhydra_lutris%29_%2825169790524%29_crop.jpg/800px-Sea_Otter_%28Enhydra_lutris%29_%2825169790524%29_crop.jpg" />
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
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Sea_Otter_%28Enhydra_lutris%29_%2825169790524%29_crop.jpg/800px-Sea_Otter_%28Enhydra_lutris%29_%2825169790524%29_crop.jpg" />
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
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Sea_Otter_%28Enhydra_lutris%29_%2825169790524%29_crop.jpg/800px-Sea_Otter_%28Enhydra_lutris%29_%2825169790524%29_crop.jpg" />
                        </div>
                        <div className="dashboard-card-footer">
                            <p>Use our wide range of quizzes to master your understanding</p>
                        </div>
                    </a>
                </div>
            </div>
            <div className="w-100 text-center mt-2">
                <Button variant="link" onClick={handleLogout}>
                    Log Out
                </Button>
            </div>
        </div>,
    ];
}
