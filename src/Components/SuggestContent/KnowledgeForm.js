import React from 'react';
import { useForm } from 'react-hook-form';
import './KnowledgeForm.css';

const url = process.env.REACT_APP_BACKEND_URL;

export default function KnowledgeForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    suggestionKnowledge(data);
    reset();
    alert('Your knowledge bank suggestion has been submitted successfully.');
  };

  async function suggestionKnowledge(data) {
    await fetch(`${url}/api/suggestions`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
  }

  return (
    <div className="knowledge-form-container">
      <p className="knowledge-form-p">
        Is there currently not something in the knowledge bank which you'd like
        it to feature? If so, send in a concept and the topic it falls under.{' '}
      </p>
      <form className="knowledge-form" onSubmit={handleSubmit(onSubmit)}>
        <label id="knowledge-label">Topic</label>
        <textarea
          className="knowledge-textarea"
          type="text"
          name="knowledge_topic"
          {...register('knowledge_topic', {
            required: true,
            minLength: 3,
          })}
        ></textarea>
        {errors.knowledge_topic &&
          errors.knowledge_topic.type === 'required' && (
            <p className="form-error">Topic must not be blank</p>
          )}
        {errors.knowledge_topic &&
          errors.knowledge_topic.type === 'minLength' && (
            <p className="form-error">Topic must have at least 3 characters</p>
          )}
        <label id="knowledge-label">Concept</label>
        <textarea
          className="knowledge-textarea"
          type="text"
          name="knowledge_concept"
          {...register('knowledge_concept', {
            required: true,
            minLength: 5,
          })}
        ></textarea>
        {errors.knowledge_concept &&
          errors.knowledge_concept.type === 'required' && (
            <p className="form-error">Concept must not be blank</p>
          )}
        {errors.knowledge_concept &&
          errors.knowledge_concept.type === 'minLength' && (
            <p className="form-error">Concept must have at least 5 characters</p>
          )}
        <button id="knowledge-button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
