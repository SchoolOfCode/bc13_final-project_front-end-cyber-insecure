import { React, useState } from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { FiExternalLink } from "react-icons/fi";
import { AiFillEdit, AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { RxMagnifyingGlass } from "react-icons/rx";
import Popup from "reactjs-popup";
import Form from "../Form/Form";
import "./Application.css";
import "./ProgressBar.css";
import ApplicationDisplayed from "./ApplicationDisplayed";

const url = process.env.REACT_APP_BACKEND_URL;

function Application(props) {
  const [editing, setEditing] = useState();

  // function that sets editing state to true - passed to Form component and tells it to run a PATCH request
  function editingNotAdding() {
    setEditing(true);
    props.setAdding(false);
  }

  // function that sends a PATCH request - sent to Form component and runs when form button is clicked. Only runs when editing state is TRUE
  async function handleEditWholeApplication(id, edits) {
    await fetch(`${url}/api/jobApplications/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(edits),
    });
    props.getAllApplications();
  }

  // PATCH request adds 1 to the progress bar. Need to edit the progress and then fetch the data again so it is shown on screen
  async function handleEditAddProgress(id, currentProgress) {
    // if progress less than 7, run the PATCH request
    if (currentProgress < 7) {
      await fetch(`${url}/api/jobApplications/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ progress: currentProgress + 1 }),
      });
    }
    props.getAllApplications();
  }

  // PATCH request removes 1 from the progress bar. Need to edit the progress and then fetch the data again so it is shown on screen
  async function handleEditRemoveProgress(id, currentProgress) {
    // if progress greater than 1, run the PATCH request
    if (currentProgress > 1) {
      await fetch(`${url}/api/jobApplications/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ progress: currentProgress - 1 }),
      });
    }
    props.getAllApplications();
  }

  // DELETE specific application by ID and update it on screen
  async function handleDelete(id) {
    await fetch(`${url}/api/jobApplications/${id}`, {
      method: "DELETE",
    });
    props.getAllApplications();
  }

  let progressStage;
  let progressStageDisplay;
  switch (props.progress) {
    case 1:
      progressStage = "Research";
      progressStageDisplay = "Research";
      break;
    case 2:
      progressStage = "Ready_to_Apply";
      progressStageDisplay = "Ready to Apply";
      break;
    case 3:
      progressStage = "Applied";
      progressStageDisplay = "Applied";
      break;
    case 4:
      progressStage = "Interview_Date";
      progressStageDisplay = "Interview Date";
      break;
    case 5:
      progressStage = "Initial_Interview_Done";
      progressStageDisplay = "Initial Interview Done";
      break;
    case 6:
      progressStage = "Second_Interview_Done";
      progressStageDisplay = "Second Interview Done";
      break;
    case 7:
      progressStage = "Completed";
      progressStageDisplay = "Completed";
      break;
    default:
      progressStage = "Research";
      progressStageDisplay = "Research";
  }

  return [
    <div className="application-container">
      <div className="app-sections">
        <div className="app-section7" id="app-job-title">
          <div className="app-section-header">
            <p>Job Title</p>
          </div>
          <div className="app-section-footer">
            <p2>{props.job_title}</p2>
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
            <p2>{props.job_description}</p2>
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
                window.open(props.job_link, "_blank").focus();
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
            onOpen={editingNotAdding}
            trigger={
              <button>
                <AiFillEdit />
              </button>
            }
          >
            {(close) => (
              <div className="app-popup-container">
                <div className="app-popup">
                  <Form
                    handleEditWholeApplication={handleEditWholeApplication}
                    editing={editing}
                    close={close}
                    id={props.id}
                    defaultJobDescription={props.job_description}
                    defaultCompany={props.company}
                    defaultJobTitle={props.job_title}
                    defaultLocation={props.location}
                    defaultSalary={props.salary}
                    defaultJobLink={props.job_link}
                    defaultNotes={props.notes}
                  />
                </div>
              </div>
            )}
          </Popup>
          <Popup
            onOpen={editingNotAdding}
            trigger={
              <button>
                <RxMagnifyingGlass />
              </button>
            }
          >
            {(close) => (
              <ApplicationDisplayed
                company={props.company}
                job_title={props.job_title}
                location={props.location}
                salary={props.salary}
                job_description={props.job_description}
                notes={props.notes}
                job_link={props.job_link}
                close={close}
              />
            )}
          </Popup>

          <button onClick={() => handleDelete(props.id)}>
            <RiDeleteBinLine />
          </button>
        </div>
      </div>
      <div className="app-progress-container">
        <div className="app-progress-button">
          <button
            onClick={() => handleEditRemoveProgress(props.id, props.progress)}
          >
            <AiOutlineMinus />
          </button>
          <button
            onClick={() => handleEditAddProgress(props.id, props.progress)}
          >
            <AiOutlinePlus />
          </button>
        </div>
        <div className="app-progress-bar-container">
          <div className={progressStage}>
            <p>{progressStageDisplay}</p>
          </div>
        </div>
      </div>
    </div>,
  ];
}
export default Application;
