import React from "react";
import Popup from "reactjs-popup";
import "../InterviewPrepPage.css"


function Card(props) {
  return (
    <div className="questionStyling">
      <div className="">
        <h3>{props.question}</h3>
        <br />
        <br />
      </div>
      <div>
        <Popup
          trigger={<button className="exampleButton">Answer Example</button>}
        >
          {(close) => (
            <div className="popup">
              <div className="popup-inner">
                <p>
                {props.answer}
                </p>
                {/* <button className="close-btn" onClick={() => props.setTrigger(false)}>Close</button>  */}
                <button
                  className="button"
                  onClick={() => {
                    console.log("modal closed ");
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
