import React from "react";
import { useForm } from "react-hook-form";
import "./Form.css";
import Popup from "reactjs-popup";
import {ImCancelCircle} from 'react-icons/im';
import {GrCheckmark} from 'react-icons/gr';

export default function Form(props) {
  const { close } = props;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // onSubmit for form

  const onSubmit = (data) => {
    console.log(data);
    reset();
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
              name="jobDescription"
              {...register("jobDescription", {
                required: true,
                minLength: 20,
              })}
            ></textarea>
            {errors.jobDescription &&
              errors.jobDescription.type === "required" && (
                <p className="error">Job Description must not be blank</p>
              )}
            {errors.jobDescription &&
              errors.jobDescription.type === "minLength" && (
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
                  type="text"
                  name="jobTitle"
                  {...register("jobTitle", {
                    required: true,
                    minLength: 5,
                  })}
                ></textarea>
                {errors.jobTitle && errors.jobTitle.type === "required" && (
                  <p className="error">Job title must not be blank</p>
                )}
                {errors.jobTitle && errors.jobTitle.type === "minLength" && (
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
                  type="text"
                  name="salary"
                  {...register("salary", {
                    required: true,
                    minLength: 5,
                  })}
                ></textarea>
                {errors.salary && errors.salary.type === "required" && (
                  <p className="error">Salary must not be blank</p>
                )}
                {errors.salary && errors.salary.type === "minLength" && (
                  <p className="error">
                    Salary must have at least 5 characters
                  </p>
                )}
              </div>
              <div className="form-jobLink">
                <label>Job Link</label>
                <textarea
                  type="text"
                  name="jobLink"
                  {...register("jobLink", {
                    required: true,
                    minLength: 5,
                  })}
                ></textarea>
                {errors.jobLink && errors.jobLink.type === "required" && (
                  <p className="error">Job Link must not be blank</p>
                )}
                {errors.jobLink && errors.jobLink.type === "minLength" && (
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
                type="text"
                name="notes"
                {...register("notes", {
                  required: true,
                  minLength: 5,
                })}
              ></textarea>
              {errors.notes && errors.notes.type === "required" && (
                <p className="error">Notes must not be blank</p>
              )}
              {errors.notes && errors.notes.type === "minLength" && (
                <p className="error">Notes must have at least 5 characters</p>
              )}
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
