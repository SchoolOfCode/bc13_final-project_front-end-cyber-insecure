import React from 'react';
import { useForm } from 'react-hook-form';
import './InterviewForm.css';

const url = process.env.REACT_APP_BACKEND_URL;

export default function InterviewForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    suggestionInterview(data);
    reset();
    alert(
      'Your interview question and answer have been submitted successfully.'
    );
  };

  async function suggestionInterview(data) {
    await fetch(`${url}/api/suggestions`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
  }

  return (
    <div className="interview-form-container">
      <p className="interview-form-p">
        Do you have an interview question and example answer that other users
        can benefit from? If so, send it in for the deVault team to review.{' '}
      </p>
      <form className="interview-form" onSubmit={handleSubmit(onSubmit)}>
        <label id="interview-label">Question type</label>
        <select
          className="interview-select"
          type="text"
          name="interview_question_type"
          {...register('interview_question_type', {
            required: true,
          })}
        >
          <option> General question </option>
          <option> Technical question </option>
          <option> Question to ask employers </option>
        </select>
        {errors.interview_question_type &&
          errors.interview_question_type.type === 'required' && (
            <p className="form-error">Interview question type must not be blank</p>
          )}
        <label id="interview-label">Question</label>
        <textarea
          className="interview-textarea"
          type="text"
          name="interview_question"
          {...register('interview_question', {
            required: true,
            minLength: 20,
          })}
        ></textarea>
        {errors.interview_question &&
          errors.interview_question.type === 'required' && (
            <p className="form-error">Interview question must not be blank</p>
          )}
        {errors.interview_question &&
          errors.interview_question.type === 'minLength' && (
            <p className="form-error">
              Interview question must have at least 20 characters
            </p>
          )}
        <label id="interview-label">Example answer</label>
        <textarea
          className="interview-textarea"
          type="text"
          name="interview_answer"
          {...register('interview_answer', {
            required: true,
            minLength: 20,
          })}
        ></textarea>
        {errors.interview_answer &&
          errors.interview_answer.type === 'required' && (
            <p className="form-error">Interview answer must not be blank</p>
          )}
        {errors.interview_answer &&
          errors.interview_answer.type === 'minLength' && (
            <p className="form-error">
              Interview answer must have at least 20 characters
            </p>
          )}
        <button id="interview-button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
