import React from "react";
import {RiDeleteBinLine} from "react-icons/ri"
import {FiExternalLink} from "react-icons/fi"
import {AiFillEdit, AiOutlinePlus, AiOutlineMinus} from "react-icons/ai"


const progressStage = [
  { 1: "Research" },
  { 2: "Ready to Apply" },
  { 3: "Applied" },
  { 4: "Interview Date" },
  { 5: "Initial Interview Done" },
  { 6: "Second Interview Done" },
  { 7: "Success" },
];

function Application(props) {
  return [
    <div className="application-container">
      <div className="app-sections">
        <div className="app-section7" id="app-job-title">
          <div className="app-section-header">
            <p>Job Title</p>
          </div>
          <div className="app-section-footer">
            <p2>{props.jobTitle}</p2>
          </div>
        </div>
        <div className="app-section7">
          <div className="app-section-header">
            <p>Company</p>
          </div>
          <div className="app-section-footer">
            <p2>{props.company}</p2>
          </div>
        </div>
        <div className="app-section32">
          <div className="app-section-header">
            <p>Job Description</p>
          </div>
          <div className="app-section-footer">
            <p2>{props.jobDescription}</p2>
          </div>
        </div>
        <div className="app-section7">
          <div className="app-section-header">
            <p>Location</p>
          </div>
          <div className="app-section-footer">
            <p2>{props.location}</p2>
          </div>
        </div>
        <div className="app-section">
          <div className="app-section-header">
            <p>Salary</p>
          </div>
          <div className="app-section-footer">
            <p2>{props.salary}</p2>
          </div>
        </div>
        <div className="app-section">
          <div className="app-section-header">
            <p>Job Link</p>
          </div>
          <div className="app-section-footer">
            <button
              onClick={() => {
                window.open(props.jobLink, "_blank").focus();
              }}
            >
              <FiExternalLink/>
            </button>
          </div>
        </div>
        <div className="app-section32">
          <div className="app-section-header">
            <p>Notes</p>
          </div>
          <div className="app-section-footer">
            <p2>{props.notes}</p2>
          </div>
        </div>
        <div className="app-section" id="app-section-buttons">
          <button><AiFillEdit/></button>
          <button><RiDeleteBinLine/></button>
        </div>
      </div>
      <div className="app-progress-container">
        <div className="app-progress-bar-container">
          <div className="app-progress-bar">
            <p>Progress Bar</p>
          </div>
        </div>
        <div className="app-progress-button">
          <button><AiOutlineMinus/></button>
          <button><AiOutlinePlus/></button>
        </div>
      </div>
    </div>,
  ];
}
export default Application;
