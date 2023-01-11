import React from "react";
import Navbar from '../Navbar/Navbar'
import "./ApplicationList.css"
import Application from './Application.js';

function ApplicationList (props){
    return [
        <Navbar/>,
        <div className="applications-container">
            <div className="applications-header">
                <h1>My Applications</h1>
            </div>
            <ul className="applications-main">
                <Application/>
            </ul>
        </div>
        ]
}
export default ApplicationList