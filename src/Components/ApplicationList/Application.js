import { React } from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { FiExternalLink } from "react-icons/fi";
import { AiFillEdit, AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import Popup from "reactjs-popup";
import Form from "../Form/Form";
import dummyJobsApplications from "./dummyData";

function Application(props) {
  let progressStage;
  switch (props.progress) {
    case 1:
      progressStage = "Research";
      break;
    case 2:
      progressStage = "Ready_to_Apply";
      break;
    case 3:
      progressStage = "Applied";
      break;
    case 4:
      progressStage = "Interview_Date";
      break;
    case 5:
      progressStage = "Initial_Interview_Done";
      break;
    case 6:
      progressStage = "Second_Interview_Done";
      break;
    case 7:
      progressStage = "Completed";
      break;
    default:
      progressStage = "Research";
  }

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
            <p2>£{props.salary}</p2>
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
              <FiExternalLink />
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
          <Popup
            trigger={
              <button>
                <AiFillEdit />
              </button>
            }
          >
            {(close) => (
              <div className="app-popup-container">
                <div className="app-popup">
                  <Form close={close} defaultJobDescription={dummyJobsApplications[0].jobDescription}/>
                </div>
              </div>
            )}
          </Popup>
          <button>
            <RiDeleteBinLine />
          </button>
        </div>
      </div>
      <div className="app-progress-container">
        <div className="app-progress-bar-container">
          <div className={progressStage}>
            <p>{progressStage}</p>
          </div>
        </div>
        <div className="app-progress-button">
          <button onClick={props.progressPlus}>
            <AiOutlineMinus />
          </button>
          <button onClick={props.progressMinus}>
            <AiOutlinePlus />
          </button>
        </div>
      </div>
    </div>,
  ];
}
export default Application;
