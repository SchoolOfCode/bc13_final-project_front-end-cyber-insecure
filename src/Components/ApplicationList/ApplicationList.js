import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import "./ApplicationList.css";
import Application from "./Application.js";
import { AiOutlinePlus } from "react-icons/ai";
import Popup from "reactjs-popup";
import Form from "../Form/Form";
import { useAuth } from "../contexts/AuthContext";
import "../../Components/Ipopup.css"

const url = process.env.REACT_APP_BACKEND_URL

function ApplicationList() {

  const [adding, setAdding] = useState()
  const [applications, setApplications] = useState([])
  const { currentUser } = useAuth();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);


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
    let dataInOrder = data.payload.sort((a, b) => b.id - a.id)
    setApplications(dataInOrder);
  }

  async function getAllApplicationsForFilter() {
    const titleObject = await fetch(`${url}/api/jobApplications/${currentUser.email}`);
    let data = await titleObject.json();
    return data.payload;
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

  // function for filtering - need to fetch all applications, filter for specific progress value and update application state 
  async function filterApplications(e) {
    if (e.target.value === "Display All") {
      await getAllApplications()

    } if (e.target.value === "Research Stage") {
      let display = await getAllApplicationsForFilter();
      display = display.filter(application => { return application.progress === 1 })
      setApplications(display);

    } if (e.target.value === "Ready to Apply") {
      let display = await getAllApplicationsForFilter();
      display = display.filter(application => { return application.progress === 2 })
      setApplications(display)

    } if (e.target.value === "Applied") {
      let display = await getAllApplicationsForFilter();
      display = display.filter(application => { return application.progress === 3 })
      setApplications(display)

    } if (e.target.value === "Interview Date") {
      let display = await getAllApplicationsForFilter();
      display = display.filter(application => { return application.progress === 4 })
      setApplications(display)

    } if (e.target.value === "Initial Interview Done") {
      let display = await getAllApplicationsForFilter();
      display = display.filter(application => { return application.progress === 5 })
      setApplications(display)

    } if (e.target.value === "Second Interview Done") {
      let display = await getAllApplicationsForFilter();
      display = display.filter(application => { return application.progress === 6 })
      setApplications(display)

    } if (e.target.value === "Completed") {
      let display = await getAllApplicationsForFilter();
      display = display.filter(application => { return application.progress === 7 })
      setApplications(display)
    }
  }

  return [
    <Navbar />,
    <div className="applications-container">
      <div className="applications-header">
        <div className="applications-title">
          <h1>Keep on top of your job applications with our tracker </h1>
          <Popup
          trigger={<button className="info-button">𝒊</button>}
        >
          {(close) => (
            <div className="i-popup">
              <div className="i-popup-inner">
                <p>Using the job application tracking feature, you can easily keep track of all the jobs you are considering. To add a job application, 
                simply enter the job title, company, job description, location, salary, job link and any additional notes. 
                <br/><br/>
                You can also use the slider to track your progress from research, ready to apply, applied, interview date, 
                initial interview done, second interview done, to completed. You can view, edit and delete your applications 
                at any time. 
                <br/><br/>
                This feature will help you stay organized and motivated as you navigate the job application process.</p>
                <button
                  className="i-close-button"
                  onClick={() => {
                    console.log('modal closed ');
                    close();
                  }}
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </Popup>
        </div>
        <div className="applications-buttons">
          <div className="app-buttons-left">
            <Popup onOpen={addingNotEditing}
              trigger={
                <button id="add-application-button">
                  + Application
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
            <select onChange={filterApplications}>
              <option value="Display All">Display All</option>
              <option value="Research Stage">Research Stage</option>
              <option value="Ready to Apply">Ready to Apply</option>
              <option value="Applied">Applied</option>
              <option value="Interview Date">Interview Date</option>
              <option value="Initial Interview Done">Initial Interview Done</option>
              <option value="Second Interview Done">Second Interview Done</option>
              <option value="Completed">Completed</option>
            </select>
          </div>
        </div>
      </div>

      {loading ? (
        <div className="loader-container">
          <div className="spinner"></div>
        </div>
      ) : (
        <ul className="applications-main">
          {applications.map((app) => {
            return (
              <Application
                getAllApplications={getAllApplications}
                id={app.id}
                key={app.id}
                app={app}
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
      )}
    </div>,
  ];
}
export default ApplicationList;
