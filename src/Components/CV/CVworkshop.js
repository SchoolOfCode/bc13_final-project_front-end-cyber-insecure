import React from 'react';
import { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import frontEndDeveloper from '../../cvImages/frontendDeveloper.png';

export default function CVworkshop() {
  // Frontend CVs state
  const [frontEnd, setFrontEnd] = useState(false);

  // Fullstack CVs state
  const [fullStack, setFullStack] = useState(false);

  // Backend CVs state
  const [backend, setBackend] = useState(false);

  // UX / UI
  const [uxUi, setUxUi] = useState(false);

  return [
    <Navbar />,
    <h1>This is the CV component</h1>,
    <div className="cvButtonContainer">
      <button onClick={() => setFrontEnd(true)} className="cvButtonStyles">
        Frontend Developer
      </button>
      <button className="cvButtonStyles">Fullstack Developer</button>
      <button className="cvButtonStyles">Backend Developer</button>
      <button className="cvButtonStyles">UX / UI Designer</button>
    </div>,
    <div>
      {frontEnd && <img src={frontEndDeveloper} alt="your image name " />}
    </div>,
  ];
}
