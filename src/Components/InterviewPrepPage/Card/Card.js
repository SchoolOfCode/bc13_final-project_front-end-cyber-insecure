import React from 'react';
import Popup from 'reactjs-popup';
import '../InterviewPrepPage.css';

function Card(props) {
  return (
    <div className="cardStyling">
      <div className="question">
        <h5>{props.number}</h5>
        <h3>{props.question}</h3>
      </div>
      <div className="answer-button">
        <Popup
          trigger={<button className="exampleButton">Answer Example</button>}
        >
          {(close) => (
            <div className="popup">
              <div className="popup-inner">
                <p>{props.answer}</p>
                <button
                  className="close-button"
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
    </div>
  );
}

export default Card;


