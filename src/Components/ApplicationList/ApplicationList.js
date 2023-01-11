import React from "react";
import Navbar from "../Navbar/Navbar";
import "./ApplicationList.css";
import Application from "./Application.js";
import dummyJobsApplications from "./dummyData";
import { AiOutlinePlus } from "react-icons/ai";
import Popup from "reactjs-popup";

function ApplicationList(props) {
  return [
    <Navbar />,
    <div className="applications-container">
      <div className="applications-header">
        <div className="applications-title">
          <h1>My Applications</h1>
        </div>
        <div className="applications-buttons">
          <div className="app-buttons-left">
            <Popup
              trigger={
                <button>
                  <AiOutlinePlus /> Application
                </button>
              }
            >
              {(close) => (
                <div className="app-popup-container">
                  <div className="app-popup">
                    <div>
                      <p>Job Title</p>
                      <input></input>
                    </div>
                    <div>
                      <p>Company Name</p>
                      <input></input>
                    </div>
                    <div>
                      <p>Job Description</p>
                      <input></input>
                    </div>
                    <div>
                      <p>Location</p>
                      <input></input>
                    </div>
                    <div>
                      <p>Salary</p>
                      <input></input>
                    </div>
                    <div>
                      <p>Job Link</p>
                      <input></input>
                    </div>
                    <div>
                      <p>Notes</p>
                      <input></input>
                    </div>
                    <div>
                      <button>Save</button>
                      <button>Cancel</button>
                    </div>

                    <div className="">
                      <button
                        className="button"
                        onClick={() => {
                          console.log("modal closed ");
                          close();
                        }}
                      >
                        close
                      </button>
                    </div>
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
        {dummyJobsApplications.map((app) => {
          return (
            <Application
              jobTitle={app.jobTitle}
              company={app.company}
              jobDescription={app.jobDescription}
              location={app.location}
              salary={app.salary}
              jobLink={app.jobLink}
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
