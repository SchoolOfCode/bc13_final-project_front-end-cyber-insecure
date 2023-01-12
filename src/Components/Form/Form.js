import React from 'react'
import { useForm } from "react-hook-form";

export default function Form() {

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm();


    // onSubmit for form

    const onSubmit = (data) => {
        console.log(data)
        reset()
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>Job Title</label>
                    <input
                        type="text"
                        name="jobTitle"
                        {...register("jobTitle", {
                            required: true,
                            minLength: 5
                        })}></input>
                    {errors.jobTitle && errors.jobTitle.type === "required" && (
                        <p className='error'>Job title must not be blank</p>
                    )}
                    {errors.jobTitle && errors.jobTitle.type === "minLength" && (
                        <p className='error'>Job Title must have at least 5 characters</p>
                    )}
                </div>
                <div>
                    <label>Company name</label>
                    <input
                        type="text"
                        name="company"
                        {...register("company", {
                            required: true,
                            minLength: 5
                        })}></input>
                    {errors.company && errors.company.type === "required" && (
                        <p className='error'>Company name must not be blank</p>
                    )}
                    {errors.company && errors.company.type === "minLength" && (
                        <p className='error'>Company name must have at least 5 characters</p>
                    )}
                </div>
                <div>
                    <label>Job Description</label>
                    <input
                        type="text"
                        name="jobDescription"
                        {...register("jobDescription", {
                            required: true,
                            minLength: 20
                        })}></input>
                    {errors.jobDescription && errors.jobDescription.type === "required" && (
                        <p className='error'>Job Description must not be blank</p>
                    )}
                    {errors.jobDescription && errors.jobDescription.type === "minLength" && (
                        <p className='error'>Job Description must have at least 20 characters</p>
                    )}
                </div>
                <div>
                    <label>Location</label>
                    <input
                        type="text"
                        name="location"
                        {...register("location", {
                            required: true,
                            minLength: 5
                        })}></input>
                    {errors.location && errors.location.type === "required" && (
                        <p className='error'>Location must not be blank</p>
                    )}
                    {errors.location && errors.location.type === "minLength" && (
                        <p className='error'>Location must have at least 5 characters</p>
                    )}
                </div>
                <div>
                    <label>Salary</label>
                    <input
                        type="text"
                        name="salary"
                        {...register("salary", {
                            required: true,
                            minLength: 5
                        })}></input>
                    {errors.salary && errors.salary.type === "required" && (
                        <p className='error'>Salary must not be blank</p>
                    )}
                    {errors.salary && errors.salary.type === "minLength" && (
                        <p className='error'>Salary must have at least 5 characters</p>
                    )}
                </div>
                <div>
                    <label>Job Link</label>
                    <input
                        type="text"
                        name="jobLink"
                        {...register("jobLink", {
                            required: true,
                            minLength: 5
                        })}></input>
                    {errors.jobLink && errors.jobLink.type === "required" && (
                        <p className='error'>Job Link must not be blank</p>
                    )}
                    {errors.jobLink && errors.jobLink.type === "minLength" && (
                        <p className='error'>Job Link must have at least 5 characters</p>
                    )}
                </div>
                <div>
                    <label>Notes</label>
                    <input
                        type="text"
                        name="notes"
                        {...register("notes", {
                            required: true,
                            minLength: 5
                        })}></input>
                    {errors.notes && errors.notes.type === "required" && (
                        <p className='error'>Notes must not be blank</p>
                    )}
                    {errors.notes && errors.notes.type === "minLength" && (
                        <p className='error'>Notes must have at least 5 characters</p>
                    )}
                </div>
                <div>
                    <button type='submit'>Save</button>
                </div>
            </form>
        </div>
    )
}
