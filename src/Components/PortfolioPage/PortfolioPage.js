import React from "react";
import Popup from "../Popup/Popup";
import Navbar from '../Navbar/Navbar'
import { useState } from "react";

function PortfolioPage (props){

    const [buttonPopUp, setButtonPopUp] = useState(false);

    return [
    <Navbar/>,
    <h1>This is the Portfolio page</h1>,
    
    <a onClick={() => setButtonPopUp(true)}>Answer Example
        <Popup trigger={buttonPopUp} setTrigger={setButtonPopUp}>
        <h3>Portfolio Page example</h3>
    </Popup>
    </a>
    ]
}
export default PortfolioPage