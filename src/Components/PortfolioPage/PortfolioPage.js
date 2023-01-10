import React from "react";
import { useState } from "react";
import Popup from "../Popup/Popup";
import Navbar from '../Navbar/Navbar'
import jordanGithubPlain from '../../Images/jordanGithubPlain.png'
import jordanGithubPopup from '../../Images/jordanGithubPopup.png'
import jordanPortfolioPlain from '../../Images/jordanPortfolioPlain.png'
import jordanPortfolioPopup from '../../Images/jordanPorfolioPopup.png'
import './PortfolioPage.css'

function PortfolioPage(props) {

    const [buttonPopUp, setButtonPopUp] = useState(false);

    return [
        <Navbar />,
        <div className='PortfolioPage-container'>
            <h1>This is the Portfolio page</h1>

            <div className='PortfolioPage-examples'>
                <div onClick={() => setButtonPopUp(!buttonPopUp)} className="PorfolioPage-example-item">
                    <img className='portfolio-plain-image' src={jordanGithubPlain} alt=''/>
                    <br></br>
                    <Popup trigger={buttonPopUp} setTrigger={setButtonPopUp} newProp={'hello'} >
                        <img className='portfolio-popup-image' src={jordanGithubPopup} alt=''/> 
                        <p> hello </p>
                    </Popup>
                </div>

                <div onClick={() => setButtonPopUp(!buttonPopUp)} className="PorfolioPage-example-item">
                    <img className='portfolio-plain-image' src={jordanPortfolioPlain} alt=''/>
                    <br></br>
                    <Popup trigger={buttonPopUp} setTrigger={setButtonPopUp}>
                        <img className='portfolio-popup-image' src={jordanPortfolioPopup} alt=''/>
                    </Popup>
                </div>
            </div>
        </div>
    ]
}
export default PortfolioPage
