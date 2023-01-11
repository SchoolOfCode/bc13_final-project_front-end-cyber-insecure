import React from "react";

function Application(props) {
  return [
    <div className="application-container">
      <div className="app-sections">
        <div className="app-section">
          <p>Job Title</p>
        </div>
        <div className="app-section">
          <p>Company</p>
        </div>
        <div className="app-section">
          <p>Job Description</p>
        </div>
        <div className="app-section">
          <p>Location</p>
        </div>
        <div className="app-section">
          <p>Salary</p>
        </div>
        <div className="app-section">
          <p>Job Link</p>
        </div>
        <div className="app-section">
          <p>Notes</p>
        </div>
        <div className="app-section">
          <p>Buttons</p>
        </div>
      </div>
      <div className="app-progress-container">
        <div className="app-progress-bar">
          <p>Progress Bar</p>
        </div>
      </div>
    </div>,
  ];
}
export default Application;
