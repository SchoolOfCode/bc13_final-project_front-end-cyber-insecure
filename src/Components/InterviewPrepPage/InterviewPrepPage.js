import './InterviewPrepPage.css';
import React from 'react';
import Navbar from '../Navbar/Navbar';
import Popup from 'reactjs-popup';
import Card from './Card/Card';
import interviewQuestions from './dummyData/dummyData';
import "../../Components/Ipopup.css"

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 3000, min: 2001 },
    items: 5,
  },
  desktopLarger: {
    breakpoint: { max: 2000, min: 1701 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 1700, min: 1024 },
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

  return [
    <Navbar />,
    <div className="interviewPrepPage_container">
      <div className='interviewPrepPage_container-header'>
      <h1>Become job-ready by following our interview preparation advice </h1>
      <Popup
          trigger={<button className="info-button">𝒊</button>}
        >
          {(close) => (
            <div className="i-popup">
              <div className="i-popup-inner">
                <p>Our interview preparation feature is designed to help prepare you for job interviews. We provide questions 
                and example answers to help you feel confident and prepared for both general and technical interview questions. 
                <br/><br/>
                Keep in mind - while an employer is interviewing you, you are also interviewing them. 
                We provide questions to ask employers after the interview to demonstrate your knowledge and interest 
                in the role and to understand whether they are a right fit for you. 
                <br/><br/>
                This feature is aimed to help you quickly find the resources you need to ace the interview.</p>
                <button
                  className="i-close-button"
                  onClick={() => {
                    console.log('modal closed ');
                    close();
                  }}
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </Popup>
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
