import React from 'react';
import { useForm } from 'react-hook-form';
import './QuizForm.css';

const url = process.env.REACT_APP_BACKEND_URL;

export default function QuizForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    suggestionQuiz(data);
    reset();
    alert('Your quiz question suggestion has been submitted successfully.');
  };

  async function suggestionQuiz(data) {
    await fetch(`${url}/api/suggestions`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
  }

  return (
    <div className="quiz-form-container">
      <p className="quiz-form-p">
        Do you have a quiz question that you'd like to have featured on the
        site? If so, send in a suggestion.{' '}
      </p>
      <form className="quiz-form" onSubmit={handleSubmit(onSubmit)}>
        <label id="quiz-label">Quiz topic</label>
        <textarea
          className="quiz-textarea"
          type="text"
          name="quiz_topic"
          {...register('quiz_topic', {
            required: true,
            minLength: 3,
          })}
        ></textarea>
        {errors.quiz_topic && errors.quiz_topic.type === 'required' && (
          <p className="form-error">Quiz topic must not be blank</p>
        )}
        {errors.quiz_topic && errors.quiz_topic.type === 'minLength' && (
          <p className="form-error">Quiz topic must have at least 3 characters</p>
        )}
        <label id="quiz-label">Quiz question</label>
        <textarea
          className="quiz-textarea"
          type="text"
          name="quiz_question"
          {...register('quiz_question', {
            required: true,
            minLength: 20,
          })}
        ></textarea>
        {errors.quiz_question && errors.quiz_question.type === 'required' && (
          <p className="form-error">Quiz question must not be blank</p>
        )}
        {errors.quiz_question && errors.quiz_question.type === 'minLength' && (
          <p className="form-error">
            Quiz question must have at least 20 characters
          </p>
        )}
        <button id="quiz-button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
