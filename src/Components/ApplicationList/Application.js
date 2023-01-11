import React from "react";

const progressStage = [
    {1: "Research"},
    {2: "Ready to Apply"},
    {3: "Applied"},
    {4: "Interview Date"},
    {5: "Initial Interview Done"},
    {6: "Second Interview Done"},
    {7: "Success"},
]

function Application(props) {
  return [
    <div className="application-container">
      <div className="app-sections">
        <div className="app-section7">
          <p>Job Title</p>
          <p2>{props.jobTitle}</p2>
        </div>
        <div className="app-section7">
          <p>Company</p>
          <p2>{props.company}</p2>
        </div>
        <div className="app-section32">
          <p>Job Description</p>
          <p2>{props.jobDescription}</p2>
        </div>
        <div className="app-section7">
          <p>Location</p>
          <p2>{props.location}</p2>
        </div>
        <div className="app-section">
          <p>Salary</p>
          <p2>{props.salary}</p2>
        </div>
        <div className="app-section">
          <p>Job Link</p>
          <button
            onClick={() => {
              window.open(props.jobLink, "_blank").focus();
            }}
          >
            Open
          </button>
        </div>
        <div className="app-section32">
          <p>Notes</p>
          <p2>{props.notes}</p2>
        </div>
        <div className="app-section" id="app-section-buttons">
          <button>Edit</button>
          <button>Delete</button>
        </div>
      </div>
      <div className="app-progress-container">
        <div className="app-progress-bar-container">
          <div className="app-progress-bar">
            <p>Progress Bar</p>
          </div>
        </div>
        <div className="app-progress-button">
          <button>-</button>
          <button>+</button>
        </div>
      </div>
    </div>,
  ];
}
export default Application;
