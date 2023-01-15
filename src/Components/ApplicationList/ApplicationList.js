import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import "./ApplicationList.css";
import Application from "./Application.js";
import { AiOutlinePlus } from "react-icons/ai";
import Popup from "reactjs-popup";
import Form from "../Form/Form";
import { useAuth } from "../contexts/AuthContext";

const url = process.env.REACT_APP_BACKEND_URL

function ApplicationList() {

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
    // array filter to find the application with specific id (same as doing a for loop)
    id = applications.filter(appToDelete => { return appToDelete.id === id })
    await fetch(`${url}/api/jobApplications/${id[0].id}`, {
      method: "DELETE"
    })
    getAllApplications();
  }

  // PATCH request adds 1 to the progress bar. Need to first locate the application to edit, edit the progress, and then fetch the data again so it is shown on screen
  async function handleEditAddProgress(id, application) {
    // array filter to find the application with specific id (same as doing a for loop)
    application = applications.filter(appToEdit => { return appToEdit.id === id })
    // if progress less than 7, run the PATCH request
    if (application[0].progress < 7) {
      await fetch(`${url}/api/jobApplications/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ progress: application[0].progress + 1 })
      })
    }
    getAllApplications();
  }

  // PATCH request removes 1 from the progress bar. Need to first locate the application to edit, edit the progress, and then fetch the data again so it is shown on screen
  async function handleEditRemoveProgress(id, application) {
    // array filter to find the application with specific id (same as doing a for loop)
    application = applications.filter(appToEdit => { return appToEdit.id === id })
    // if progress greater than 1, run the PATCH request
    if (application[0].progress > 1) {
      await fetch(`${url}/api/jobApplications/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ progress: application[0].progress - 1 })
      })
    }
    getAllApplications();
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

  // function for sorting - onClick not allowed on option tags so have to use onChange on the select tag and use the value to then run the sort and update the state
  function sortFunction(e) {
    if (e.target.value === "Progress high-low") {
      let highProgress = [...applications].sort((a, b) => b.progress - a.progress)
      setApplications(highProgress)
    } if (e.target.value === "Progress low-high") {
      let lowProgress = [...applications].sort((a, b) => a.progress - b.progress)
      setApplications(lowProgress)
    }
    // have to do parseInt on salary values as they are a string
    if (e.target.value === "Salary high-low") {
      let highProgress = [...applications].sort((a, b) => parseInt(b.salary) - parseInt(a.salary))
      setApplications(highProgress)
    } if (e.target.value === "Salary low-high") {
      let lowProgress = [...applications].sort((a, b) => parseInt(a.salary) - parseInt(b.salary))
      setApplications(lowProgress)
    }
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
            <select onChange={sortFunction}>
              <option value="">Sort By</option>
              <option value="Salary high-low">Salary high-low</option>
              <option value="Salary low-high">Salary low-high</option>
              <option value="Progress high-low">Progress high-low</option>
              <option value="Progress low-high">Progress low-high</option>
            </select>
            <select>
              <option value="">Display All</option>
              <option value="">Research Stage</option>
              <option value="">Ready to Apply</option>
              <option value="">Applied</option>
              <option value="">Interview Date</option>
              <option value="">Initial Interview Done</option>
              <option value="">Second Interview Done</option>
              <option value="">Completed</option>
            </select>
          </div>
        </div>
      </div>
      {applications.length < 1 &&
        <h1>No current applications</h1>
      }
      {applications &&
        <ul className="applications-main">
          {applications.map((app) => {
            return (
              <Application
                getAllApplications={getAllApplications}
                handleDelete={() => handleDelete(app.id)}
                handleEditAddProgress={() => handleEditAddProgress(app.id, app)}
                handleEditRemoveProgress={() => handleEditRemoveProgress(app.id, app)}
                id={app.id}
                key={app.id}
                adding={app}
                setAdding={setAdding}
                job_title={app.job_title}
                company={app.company}
                job_description={app.job_description}
                location={app.location}
                salary={app.salary}
                job_link={app.job_link}
                notes={app.notes}
                progress={app.progress}
              />
            );
          })}
        </ul>
      }
    </div>,
  ];
}
export default ApplicationList;
