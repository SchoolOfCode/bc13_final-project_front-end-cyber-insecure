import React from "react";
import Navbar from "../Navbar/Navbar";
import jordanGithubPlain from "../../Images/jordanGithubPlain.png";
import jordanGithubPopup from "../../Images/jordanGithubPopup.png";
import jordanPortfolioPlain from "../../Images/jordanPortfolioPlain.png";
import jordanPortfolioPopup from "../../Images/jordanPorfolioPopup.png";
import julioGithubPlain from "../../Images/julioGithubPlain.png";
import julioGithubPopup from "../../Images/julioGithubPopup.png";
import julioPortfolioPlain from "../../Images/julioPortfolioPlain.png";
import julioPortfolioPopup from "../../Images/julioPortfolioPopup.png";
import aakashGithubPlain from "../../Images/aakashGithubPlain.png";
import aakashGithubPopup from "../../Images/aakashGithubPopup.png";
import aakashPortfolioPlain from "../../Images/aakashPortfolioPlain.png";
import aakashPortfolioPopup from "../../Images/aakashPortfolioPopup.png";
import "./PortfolioPage.css";
import Popup from "reactjs-popup";
import { SocialIcon } from "react-social-icons";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./PortfolioCarousel.css";
import "../../Components/Ipopup.css"


const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 3,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

function PortfolioPage(props) {
  return [
    <Navbar />,
    <div className="PortfolioPage-container">
      <div className="PortfolioPage-container-header">
        <h1 className="portfolio-main-h1">
          Perfect your Portfolio using our best-practice examples
        </h1>
        <Popup
          trigger={<button className="info-button">𝒊</button>}
        >
          {(close) => (
            <div className="i-popup">
              <div className="i-popup-inner">
                <p>Here you will find examples of well-constructed portfolios and GitHub pages, allowing you to 
                learn what makes a good portfolio and how to improve your own. 
                <br/><br/>
                Simply scroll through the carousel  to view the examples, and click on the images to see an 
                annotated version which explains why it is a good example, and tips to help you tailor and improve your own portfolio.</p>
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
      <div className="PortfolioCarousel-container">
        <Carousel
          containerClass="PortfolioCarousel-container"
          // centerMode={true}
          responsive={responsive}
          infinite={true}
        >
            <div className="PorfolioPage-example-item">
              <div className="PorfolioPage-example-item-header">
                <h2 className="portfolio-h1">
                  GitHub page
                  <SocialIcon
                    className="icon"
                    url="https://github.com/Jordaneddielinton93"
                    target="_blank"
                    rel="noreferrer"
                  />
                </h2>
              </div>
              <Popup
                trigger={
                  <div className="PorfolioPage-example-item-image-container">
                    <img
                      className="portfolio-plain-image"
                      src={jordanGithubPlain}
                      alt=""
                    />
                  </div>
                }
              >
                <img
                  className="portfolio-popup-image"
                  src={jordanGithubPopup}
                  alt=""
                />
              </Popup>
            </div>

            <div className="PorfolioPage-example-item">
              <div className="PorfolioPage-example-item-header">
                <h2 className="portfolio-h1">
                  Portfolio page
                  <SocialIcon
                    className="icon"
                    url="https://jordansfreelancing.co.uk/"
                    target="_blank"
                    rel="noreferrer"
                  />
                </h2>
              </div>
              <Popup
                trigger={
                  <div className="PorfolioPage-example-item-image-container">
                    <img
                      className="portfolio-plain-image"
                      src={jordanPortfolioPlain}
                      alt=""
                    />
                  </div>
                }
              >
                <img
                  className="portfolio-popup-image"
                  src={jordanPortfolioPopup}
                  alt=""
                />
              </Popup>
            </div>
            <div className="PorfolioPage-example-item">
              <div className="PorfolioPage-example-item-header">
                <h2 className="portfolio-h1">
                  GitHub page
                  <SocialIcon
                    className="icon"
                    url="https://github.com/Lakorthus"
                    target="_blank"
                    rel="noreferrer"
                  />
                </h2>
              </div>
              <Popup
                trigger={
                  <div className="PorfolioPage-example-item-image-container">
                    <img
                      className="portfolio-plain-image"
                      src={julioGithubPlain}
                      alt=""
                    />
                  </div>
                }
              >
                <img
                  className="portfolio-popup-image"
                  src={julioGithubPopup}
                  alt=""
                />
              </Popup>
            </div>
            <div className="PorfolioPage-example-item">
              <div className="PorfolioPage-example-item-header">
                <h2 className="portfolio-h1">
                  Portfolio page
                  <SocialIcon
                    className="icon"
                    url="https://react-portafolio-two.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                  />
                </h2>
              </div>
              <Popup
                trigger={
                  <div className="PorfolioPage-example-item-image-container">
                    <img
                      className="portfolio-plain-image"
                      src={julioPortfolioPlain}
                      alt=""
                    />
                  </div>
                }
              >
                <img
                  className="portfolio-popup-image"
                  src={julioPortfolioPopup}
                  alt=""
                />
              </Popup>
            </div>
            <div className="PorfolioPage-example-item">
              <div className="PorfolioPage-example-item-header">
                <h2 className="portfolio-h1">
                  GitHub page
                  <SocialIcon
                    className="icon"
                    url="https://github.com/aakashsh1999"
                    target="_blank"
                    rel="noreferrer"
                  />
                </h2>
              </div>
              <Popup
                trigger={
                  <div className="PorfolioPage-example-item-image-container">
                    <img
                      className="portfolio-plain-image"
                      src={aakashGithubPlain}
                      alt=""
                    />
                  </div>
                }
              >
                <img
                  className="portfolio-popup-image"
                  src={aakashGithubPopup}
                  alt=""
                />
              </Popup>
            </div>
            <div className="PorfolioPage-example-item">
              <div className="PorfolioPage-example-item-header">
                <h2 className="portfolio-h1">
                  Portfolio page
                  <SocialIcon
                    className="icon"
                    url="https://aakash-sharma.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  />
                </h2>
              </div>
              <Popup
                trigger={
                  <div className="PorfolioPage-example-item-image-container">
                    <img
                      className="portfolio-plain-image"
                      src={aakashPortfolioPlain}
                      alt=""
                    />
                  </div>
                }
              >
                <img
                  className="portfolio-popup-image"
                  src={aakashPortfolioPopup}
                  alt=""
                />
              </Popup>
            </div>
        </Carousel>
      </div>
    </div>,
  ];
}
export default PortfolioPage;
