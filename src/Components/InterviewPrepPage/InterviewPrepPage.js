import './InterviewPrepPage.css';
import { useState } from 'react';
import React from "react";
import Popup from '../Popup/Popup';
import Navbar from '../Navbar/Navbar';

function InterviewPrepPage (props){

    const [buttonPopUp, setButtonPopUp] = useState(false);

    // 1. Onclick event handler showing a popup card of a good answer structure to each question when clicked
    // 2. I think we need to use, the useState hook in order for this to work.
    // 3. Check chatGt


    return [
        <Navbar/>,
        <div className="interviewPrepPage_container">
            <h1>Interview Preparation</h1>
            <h2>Key Interview Questions and Answers</h2>

            <div className="allQuestions_container">
                <section className="interviewQuestionsSection">
                    <h2>General Questions from Interviewers</h2>
                    <div className="questionsList">   
                        <div className="questionStyling">
                            <h3>Why did you choose to be a developer?</h3>
                            <br/><br/>
                            <button onClick={() => setButtonPopUp(true)}>Answer Example</button>
                            <Popup trigger={buttonPopUp} setTrigger={setButtonPopUp}> 
                               <h3>Answer example:</h3> 
                               <p>blah blah blah</p>
                            </Popup>
                        </div>

                        <div className="questionStyling">
                            <h3>Do you like to work in a team? What would be a perfect team for you?</h3>
                            <br/><br/>
                            <button onClick={() => setButtonPopUp(true)}>Answer Example</button>
                            <Popup trigger={buttonPopUp} setTrigger={setButtonPopUp}> 
                               <h3>Answer example:</h3> 
                               <p>blah blah blah</p>
                            </Popup>                        </div>

                        <div className="questionStyling">
                            <h3>What is your motivation for joining the @companyname?</h3>
                            <br/><br/>
                            <button onClick={() => setButtonPopUp(true)}>Answer Example</button>
                            <Popup trigger={buttonPopUp} setTrigger={setButtonPopUp}> 
                               <h3>Answer example:</h3> 
                               <p>blah blah blah</p>
                            </Popup>                        </div>
                    </div> 
                </section>
                
                <section className="interviewQuestionsSection">
                    <h2>Technial Questions</h2>
                    <div className="questionsList">
                        <div className="questionStyling">
                            <h3>How does CRUD work? Examples? How do I get a crud ID?</h3>
                            <br/><br/>
                            <button onClick={() => setButtonPopUp(true)}>Answer Example</button>
                            <Popup trigger={buttonPopUp} setTrigger={setButtonPopUp}> 
                               <h3>Answer example:</h3> 
                               <p>blah blah blah</p>
                            </Popup>                        </div>
                        
                        <div className="questionStyling">
                            <h3>How to use an API in the backend?</h3>
                            <br/><br/>
                            <button onClick={() => setButtonPopUp(true)}>Answer Example</button>
                            <Popup trigger={buttonPopUp} setTrigger={setButtonPopUp}> 
                               <h3>Answer example:</h3> 
                               <p>blah blah blah</p>
                            </Popup>                        </div>
                        
                        <div className="questionStyling">
                            <h3>What is the difference between an object and an array?</h3>
                            <br/><br/>
                            <button onClick={() => setButtonPopUp(true)}>Answer Example</button>
                            <Popup trigger={buttonPopUp} setTrigger={setButtonPopUp}> 
                               <h3>Answer example:</h3> 
                               <p>blah blah blah</p>
                            </Popup>                        </div>
                    </div>
                </section>
              

                <section className="interviewQuestionsSection">
                    <h2>After Interview Questions</h2>
                    <div className="questionsList">
                        <div className="questionStyling">
                            <h3>Why do you like working here?</h3>
                            <br/><br/>
                            <button onClick={() => setButtonPopUp(true)}>Answer Example</button>
                            <Popup trigger={buttonPopUp} setTrigger={setButtonPopUp}> 
                               <h3>Answer example:</h3> 
                               <p>blah blah blah</p>
                            </Popup>                        </div>
                        
                        <div className="questionStyling">
                            <h3>Could you tell me more about the team I would be part of?</h3>
                            <br/><br/>
                            <button onClick={() => setButtonPopUp(true)}>Answer Example</button>
                            <Popup trigger={buttonPopUp} setTrigger={setButtonPopUp}> 
                               <h3>Answer example:</h3> 
                               <p>blah blah blah</p>
                            </Popup>                        </div>
                        
                        <div className="questionStyling">
                            <h3>What are some areas of improvement in the team <br/>and where a new engineer can have an impact?</h3>
                            <br/><br/>
                            <button onClick={() => setButtonPopUp(true)}>Answer Example</button>
                            <Popup trigger={buttonPopUp} setTrigger={setButtonPopUp}> 
                               <h3>Answer example:</h3> 
                               <p>blah blah blah</p>
                            </Popup>                        </div>
                    </div>
                </section>
                
            </div>

        </div>
        
    ]
}
export default InterviewPrepPage