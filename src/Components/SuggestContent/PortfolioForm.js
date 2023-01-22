import React from 'react';
import { useForm } from 'react-hook-form';
import './PortfolioForm.css';

const url = process.env.REACT_APP_BACKEND_URL;

export default function PortfolioForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    suggestionPortfolio(data);
    reset();
    alert('Your Portfolio links have been submitted successfully.');
  };

  async function suggestionPortfolio(data) {
    await fetch(`${url}/api/suggestions`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
  }

  return (
    <div className="portfolio-form-container">
      <p className="portfolio-form-p">
        Send us links to your porfolio and GitHub pages! If the deVault team
        like what they see, your work may feature on the site.{' '}
      </p>
      <form className="portfolio-form" onSubmit={handleSubmit(onSubmit)}>
        <label id="portfolio-label">Github link</label>
        <textarea
          className="portfolio-textarea"
          type="text"
          name="github_link"
          {...register('github_link', {
            required: true,
            minLength: 5,
          })}
        ></textarea>
        {errors.github_link && errors.github_link.type === 'required' && (
          <p className="form-error">GitHub link must not be blank</p>
        )}
        {errors.github_link && errors.github_link.type === 'minLength' && (
          <p className="form-error">GitHub link must have at least 5 characters</p>
        )}
        <label id="portfolio-label">Portfolio link</label>
        <textarea
          className="portfolio-textarea"
          type="text"
          name="portfolio_link"
          {...register('portfolio_link', {
            required: true,
            minLength: 5,
          })}
        ></textarea>
        {errors.portfolio_link && errors.portfolio_link.type === 'required' && (
          <p className="form-error">Porfolio link must not be blank</p>
        )}
        {errors.portfolio_link &&
          errors.portfolio_link.type === 'minLength' && (
            <p className="form-error">
              Portfolio link must have at least 5 characters
            </p>
          )}
        <button id="portfolio-button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
