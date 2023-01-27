import React from "react";
import "./ApplicationDisplayed.css";
import { FiExternalLink } from "react-icons/fi";
import { ImCancelCircle } from "react-icons/im";

function ApplicationDisplayed(props) {
  const { close } = props;
  return (
    <div className="AppDisplayed-popup">
      <div className="AppDisplayed-container">
        <div className="AppDisplayed-top">
          <div className="AppDisplayed-top-left">
            <div className="AppDisplayed-top-section">
              <div className="AppDisplayed-top-section-top">
                <p>Company</p>
              </div>
              <div className="AppDisplayed-top-section-bottom">
                <p2>{props.company}</p2>
              </div>
            </div>
            <div className="AppDisplayed-top-section">
              <div className="AppDisplayed-top-section-top">
                <p>Job Title</p>
              </div>
              <div className="AppDisplayed-top-section-bottom">
                <p2>{props.job_title}</p2>
              </div>
            </div>
          </div>
          <div className="AppDisplayed-top-right">
            <div className="AppDisplayed-top-section">
              <div className="AppDisplayed-top-section-top">
                <p>Location</p>
              </div>
              <div className="AppDisplayed-top-section-bottom">
                <p2>{props.location}</p2>
              </div>
            </div>
            <div className="AppDisplayed-top-section">
              <div className="AppDisplayed-top-section-top">
                <p>Salary</p>
              </div>
              <div className="AppDisplayed-top-section-bottom">
                <p2>£{props.salary}</p2>
              </div>
            </div>
          </div>
        </div>
        <div className="AppDisplayed-main">
          <div className="AppDisplayed-main-section">
            <div className="AppDisplayed-main-section-top">
              <p>Job Description</p>
            </div>
            <div className="AppDisplayed-main-section-bottom">
              <p2>{props.job_description}</p2>
            </div>
          </div>
          <div className="AppDisplayed-main-section">
            <div className="AppDisplayed-main-section-top">
              <p>Notes</p>
            </div>
            <div className="AppDisplayed-main-section-bottom">
              <p2>{props.notes}</p2>
            </div>
          </div>
        </div>
        <div className="AppDisplayed-bottom">
          <div className="AppDisplayed-bottom-link">
            <button
              onClick={() => {
                window.open(props.job_link, "_blank").focus();
              }}
            >
              <FiExternalLink />
            </button>
          </div>
          <div className="AppDisplayed-bottom-close">
            <button
              className="button"
              onClick={() => {
                close();
              }}
            >
              <ImCancelCircle />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ApplicationDisplayed;
