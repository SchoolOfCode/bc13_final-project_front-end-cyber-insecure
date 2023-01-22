import React from 'react'
import { useForm } from "react-hook-form";
import './CVform.css'

const url = process.env.REACT_APP_BACKEND_URL;

export default function CVform() {

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        suggestionCV(data)
        reset();
        alert("Your CV has been submitted successfully.")
    };

    async function suggestionCV(data) {
        await fetch(`${url}/api/suggestions`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data)
        })
      }

    return (
        <div className='cv-form-container'>
            <p className='cv-form-p'>You can easily host your CV online with services like Google Drive and Dropbox. 
            Once hosted, submit your link for the deVault team to review. </p>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label id='cv-label'>CV link</label>
                <input
                    className='interview-input'
                    type="text"
                    name="cv_link"
                    {...register("cv_link", {
                        required: true,
                        minLength: 5,
                    })}
                ></input>
                {errors.cv_link &&
                    errors.cv_link.type === "required" && (
                        <p className="error">CV link must not be blank</p>
                    )}
                {errors.cv_link &&
                    errors.cv_link.type === "minLength" && (
                        <p className="error">
                            CV link must have at least 5 characters
                        </p>
                    )}
                <button id='cv-button' type="submit"> Submit </button>
            </form>
        </div>
    )
}