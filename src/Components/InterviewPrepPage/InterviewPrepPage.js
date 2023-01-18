import './InterviewPrepPage.css';
import { useState } from 'react';
import React from 'react';
// import Popup from '../Popup/Popup';
import Navbar from '../Navbar/Navbar';
import Popup from 'reactjs-popup';
import Card from './Card/Card';
import interviewQuestions from './dummyData/dummyData';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1150, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

function InterviewPrepPage(props) {
  // 1. Onclick event handler showing a popup card of a good answer structure to each question when clicked
  // 2. I think we need to use, the useState hook in order for this to work.
  // 3. Check chatGt

  return [
    <Navbar />,
    <div className="interviewPrepPage_container">
      <div className='interviewPrepPage_container-header'>
      <h1>Interview Preparation</h1>
      <h2>Key Interview Questions and Answers</h2>
      </div>
      <div className="allQuestions_container">
        <section className="interviewQuestionsSection">
          <h2>General Interview Questions</h2>
          <div className="questionsList">
            <div className="carousel">
              <Carousel responsive={responsive} infinite={true} centerMode={true}>
                {interviewQuestions[0].map((item) => {
                  return (
                    <div className="react-multi-carousel-item" id="card-carousel">
                      <Card
                        question={item.question}
                        answer={item.answer}
                        number={item.number}
                      />
                    </div>
                  );
                })}
              </Carousel>
            </div>
          </div>
        </section>

        <section className="interviewQuestionsSection">
          <h2>Technical Questions</h2>
          <div className="questionsList">
            <div className="carousel">
              <Carousel responsive={responsive} infinite={true} centerMode={true}>
                {interviewQuestions[1].map((item) => {
                  return (
                    <div className="react-multi-carousel-item" id="card-carousel">
                      <Card
                        question={item.question}
                        answer={item.answer}
                        number={item.number}
                      />
                    </div>
                  );
                })}
              </Carousel>
            </div>
          </div>
        </section>

        <section className="interviewQuestionsSection">
          <h2>Questions to ask after the Interview</h2>
          <div className="questionsList">
            <div className="carousel">
              <Carousel responsive={responsive} infinite={true} centerMode={true}>
                {interviewQuestions[2].map((item) => {
                  return (
                    <div className="react-multi-carousel-item" id="card-carousel">
                      <Card
                        question={item.question}
                        answer={item.answer}
                        number={item.number}
                      />
                    </div>
                  );
                })}
              </Carousel>
            </div>
          </div>
        </section>
      </div>
    </div>,
  ];
}
export default InterviewPrepPage;
