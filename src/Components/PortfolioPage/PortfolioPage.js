import React from "react";
import { useState } from "react";
import Navbar from '../Navbar/Navbar'
import jordanGithubPlain from '../../Images/jordanGithubPlain.png'
import jordanGithubPopup from '../../Images/jordanGithubPopup.png'
import jordanPortfolioPlain from '../../Images/jordanPortfolioPlain.png'
import jordanPortfolioPopup from '../../Images/jordanPorfolioPopup.png'
import './PortfolioPage.css'
import Popup from 'reactjs-popup';

function PortfolioPage(props) {

    return [
        <Navbar />,
        <div className='PortfolioPage-container'>
            <h1>This is the Portfolio page</h1>

            <div className='PortfolioPage-examples'>
                <div className="PorfolioPage-example-item">
                    <Popup trigger={<img className='portfolio-plain-image' src={jordanGithubPlain} alt='' />}>
                        <img className='portfolio-popup-image' src={jordanGithubPopup} alt='' />
                    </Popup>
                </div>
            <hr></hr>
                <div className="PorfolioPage-example-item">
                    <Popup trigger={<img className='portfolio-plain-image' src={jordanPortfolioPlain} alt='' />}>
                        <img className='portfolio-popup-image' src={jordanPortfolioPopup} alt='' />
                    </Popup>
                </div>
            </div>
        </div>
    ]
}
export default PortfolioPage
