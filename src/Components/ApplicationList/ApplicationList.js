import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import "./ApplicationList.css";
import Application from "./Application.js";
import { AiOutlinePlus } from "react-icons/ai";
import Popup from "reactjs-popup";
import Form from "../Form/Form";
import { useAuth } from "../contexts/AuthContext";

const url = process.env.REACT_APP_BACKEND_URL

function ApplicationList(props) {

  const [adding, setAdding] = useState()
  const [applications, setApplications] = useState([])
  const { currentUser } = useAuth();

  // useEffect calls below getAllApplications function 
  useEffect(() => {
    getAllApplications()
  }, [])

  // function that sets adding state to true - passed to Form component and tells it to run a POST request
  function addingNotEditing() {
    setAdding(true);
  }

  // GET request for all applications for specific email address logged in
  async function getAllApplications() {
    const titleObject = await fetch(`${url}/api/jobApplications/${currentUser.email}`);
    let data = await titleObject.json();
    setApplications(data.payload);
  }

  // DELETE specific application by ID and update it on screen
  async function handleDelete(id) {
    for (let i = 0; i < applications.length; i++) {
      if (applications[i].id === id) {
        await fetch(`${url}/api/jobApplications/${id}`, {
          method: "DELETE"
        })
        const deleted = [...applications.slice(0, i), ...applications.slice(i + 1)];
        setApplications(deleted);
      }
    } return
  }

  // PATCH request adds 1 to the progress bar. Need to first fetch the data to get the correct progress, edit the progress, and then fetch the data again so it is shown on screen
  async function handleEditAddProgress(id, application) {
    await getAllApplications();
    for (let i = 0; i < applications.length; i++) {
      if (applications[i].id === id) {
        application = applications[i]
      }
    }
    if (application.progress < 7) {
      for (let i = 0; i < applications.length; i++) {
        if (applications[i].id === id) {
          await fetch(`${url}/api/jobApplications/${id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ progress: application.progress + 1 })
          })
        }
      }
    } await getAllApplications();
  }

  // PATCH request removes 1 from the progress bar. Need to first fetch the data to get the correct progress, edit the progress, and then fetch the data again so it is shown on screen
  async function handleEditRemoveProgress(id, application) {
    await getAllApplications();
    for (let i = 0; i < applications.length; i++) {
      if (applications[i].id === id) {
        application = applications[i]
      }
    }
    if (application.progress > 1) {
      for (let i = 0; i < applications.length; i++) {
        if (applications[i].id === id) {
          await fetch(`${url}/api/jobApplications/${id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ progress: application.progress - 1 })
          })
        }
      }
    }  getAllApplications();
  }

  // function that sends a POST request - sent to Form component and runs when form button is clicked. Only runs when adding state is TRUE
  async function handleAddNewApplication(newApplication) {
    await fetch(`${url}/api/jobApplications`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newApplication)
    })
    getAllApplications();
  }

  return [
    <Navbar />,
    <div className="applications-container">
      <div className="applications-header">
        <div className="applications-title">
          <h1>My Applications</h1>
        </div>
        <div className="applications-buttons">
          <div className="app-buttons-left">
            <Popup onOpen={addingNotEditing}
              trigger={
                <button >
                  <AiOutlinePlus /> Application
                </button>
              }
            >
              {(close) => (
                <div className="app-popup-container">
                  <div className="app-popup">
                    <Form 
                    adding={adding}
                    handleAddNewApplication={handleAddNewApplication}
                    getAllApplications={getAllApplications}
                    close={close} />
                  </div>
                </div>
              )}
            </Popup>
          </div>
          <div className="app-buttons-right">
            <select>
              <option value="">Sort By</option>
              <option value="">Salary high-low</option>
              <option value="">Salary low-high</option>
              <option value="">Progress high-low</option>
              <option value="">Progress low-high</option>
            </select>
            <select>
              <option value="">Display All</option>
              <option value="">Research Stage</option>
              <option value="">Applied</option>
              <option value="">Interview Date</option>
              <option value="">Initial Interview Done</option>
              <option value="">Second Interview Done</option>
              <option value="">Completed</option>
            </select>
          </div>
        </div>
      </div>
      <ul className="applications-main">
        {applications.map((app) => {
          return (
            <Application
              getAllApplications={getAllApplications}
              handleDelete={() => handleDelete(app.id)}
              handleEditAddProgress={() => handleEditAddProgress(app.id, app)}
              handleEditRemoveProgress={() => handleEditRemoveProgress(app.id, app)}
              id={app.id}
              adding={app}
              setAdding={setAdding}
              job_title={app.job_title}
              company={app.company}
              job_description={app.job_description}
              location={app.location}
              salary={app.salary}
              job_link={app.jobLink}
              notes={app.notes}
              progress={app.progress}
            />
          );
        })}
      </ul>
    </div>,
  ];
}
export default ApplicationList;
