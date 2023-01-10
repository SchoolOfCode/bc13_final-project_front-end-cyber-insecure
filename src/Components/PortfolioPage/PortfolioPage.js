import React from "react";
import Popup from "../Popup/Popup";
import Navbar from '../Navbar/Navbar'
import { useState } from "react";
import jordanGithubPlain from '../../Images/jordanGithubPlain.png'
import jordanGithubPopup from '../../Images/jordanGithubPopup.png'
import './PortfolioPage.css'

function PortfolioPage(props) {

    const [buttonPopUp, setButtonPopUp] = useState(false);

    return [
        <Navbar />,
        <div className='PortfolioPage-container'>
        <h1>This is the Portfolio page</h1>

            <div className='PortfolioPage-examples'>
                <div className="PorfolioPage-example-item">
                    <a onClick={() => setButtonPopUp(true)}>
                        <img className='portfolio-plain-image' src={jordanGithubPlain} alt='' />
                        <Popup trigger={buttonPopUp} setTrigger={setButtonPopUp}>
                            <img className='portfolio-popup-image' src={jordanGithubPopup} alt='' />
                        </Popup>
                    </a>
                </div>

                <div className="PorfolioPage-example-item">
                    <a onClick={() => setButtonPopUp(true)}>
                        <img className='portfolio-plain-image' src={jordanGithubPlain} alt='' />
                        <Popup trigger={buttonPopUp} setTrigger={setButtonPopUp}>
                            <img img className='portfolio-popup-image' src={jordanGithubPopup} alt='' />
                        </Popup>
                    </a>
                </div>
            </div>
        </div>
    ]
}
export default PortfolioPage
