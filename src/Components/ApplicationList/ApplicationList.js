import React from "react";
import Navbar from '../Navbar/Navbar'
import "./ApplicationList.css"
import Application from './Application.js';
import dummyJobsApplications from "./dummyData";

function ApplicationList (props){
    return [
        <Navbar/>,
        <div className="applications-container">
            <div className="applications-header">
                <h1>My Applications</h1>
            </div>
            <ul className="applications-main">
                {dummyJobsApplications.map((app)=>{
                    return(
                        <Application 
                        jobTitle={app.jobTitle}
                        company={app.company}
                        jobDescription={app.jobDescription}
                        location={app.location}
                        salary={app.salary}
                        jobLink={app.jobLink}
                        notes={app.notes}
                        progress={app.progress}
                        
                        />
                    )
                })}
            </ul>
        </div>
        ]
}
export default ApplicationList