import React from "react";
import { useForm } from "react-hook-form";
import "./Form.css";
import {ImCancelCircle} from 'react-icons/im';
import {GrCheckmark} from 'react-icons/gr';
import { useAuth } from "../contexts/AuthContext";

export default function Form(props) {
  const { close } = props;
  const { currentUser } = useAuth();
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // onSubmit for form

  const onSubmit = (data) => {
    // if adding state is true - run the POST request
    if (props.adding === true) { 
      props.handleAddNewApplication({...data, user_email: currentUser.email})
      alert('your application has been successfully added.')
    // if editing state is true - run the PATCH request
    } if (props.editing === true) {
      props.handleEditWholeApplication(props.id, data)
      alert('your application has been successfully edited.')
    }
    reset();
    props.getAllApplications()
  };

  return (
    <div className-popup="form-container">
      <form className="form-itself" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-left">
          <div className="form-jobDescription">
            <label>Job Description</label>
            <textarea
              defaultValue={props.defaultJobDescription}
              type="text"
              name="job_description"
              {...register("job_description", {
                required: true,
                minLength: 20,
              })}
            ></textarea>
            {errors.job_description &&
              errors.job_description.type === "required" && (
                <p className="error">Job Description must not be blank</p>
              )}
            {errors.job_description &&
              errors.job_description.type === "minLength" && (
                <p className="error">
                  Job Description must have at least 20 characters
                </p>
              )}
          </div>
        </div>
        <div className="form-right">
          <div className="form-right-top">
            <div className="form-right-top-header">
              <div className="form-companyName">
                <label>Company name</label>
                <textarea 
                  defaultValue={props.defaultCompany}
                  type="text"
                  name="company"
                  {...register("company", {
                    required: true,
                    minLength: 5,
                  })}
                ></textarea>
                {errors.company && errors.company.type === "required" && (
                  <p className="error">Company name must not be blank</p>
                )}
                {errors.company && errors.company.type === "minLength" && (
                  <p className="error">
                    Company name must have at least 5 characters
                  </p>
                )}
              </div>
              <div className="form-jobTitle">
                <label>Job Title</label>
                <textarea 
                  defaultValue={props.defaultJobTitle}
                  type="text"
                  name="job_title"
                  {...register("job_title", {
                    required: true,
                    minLength: 5,
                  })}
                ></textarea>
                {errors.job_title && errors.job_title.type === "required" && (
                  <p className="error">Job title must not be blank</p>
                )}
                {errors.job_title && errors.job_title.type === "minLength" && (
                  <p className="error">
                    Job Title must have at least 5 characters
                  </p>
                )}
              </div>
            </div>
            <div className="form-right-top-footer">
              <div className="form-location">
                <label>Location</label>
                <textarea 
                  defaultValue={props.defaultLocation}
                  type="text"
                  name="location"
                  {...register("location", {
                    required: true,
                    minLength: 5,
                  })}
                ></textarea>
                {errors.location && errors.location.type === "required" && (
                  <p className="error">Location must not be blank</p>
                )}
                {errors.location && errors.location.type === "minLength" && (
                  <p className="error">
                    Location must have at least 5 characters
                  </p>
                )}
              </div>
              <div className="form-salary">
                <label>Salary</label>
                <textarea 
                  defaultValue={props.defaultSalary}
                  type="text"
                  name="salary"
                  {...register("salary", {
                    required: false,
                  })}
                ></textarea>
              </div>
              <div className="form-jobLink">
                <label>Job Link</label>
                <textarea
                  defaultValue={props.defaultJobLink}
                  type="text"
                  name="job_link"
                  {...register("job_link", {
                    required: true,
                    minLength: 5,
                  })}
                ></textarea>
                {errors.job_link && errors.job_link.type === "required" && (
                  <p className="error">Job Link must not be blank</p>
                )}
                {errors.job_link && errors.job_link.type === "minLength" && (
                  <p className="error">
                    Job Link must have at least 5 characters
                  </p>
                )}
              </div>
            </div>
          </div>
          <div className="form-right-bottom">
            <div className="form-notes">
              <label>Notes</label>
              <textarea
                defaultValue={props.defaultNotes}
                type="text"
                name="notes"
                {...register("notes", {
                  required: false,

                })}
              ></textarea>
            </div>
          </div>
          <div className="form-buttons">
            <button
              className="button"
              onClick={() => {
                close();
              }}
            >
              <ImCancelCircle/>
            </button>
            <button type="submit"><GrCheckmark/></button>
          </div>
        </div>
      </form>
    </div>
  );
}
