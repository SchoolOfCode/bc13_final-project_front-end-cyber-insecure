import React from "react";
import Popup from "reactjs-popup";
import { SocialIcon } from "react-social-icons";
import "./PortfolioPage.css";
function PortfolioCard(props) {
  console.log(props)
  return (
    <div className="PortfolioPage-examples">
      <div className="PorfolioPage-example-item">
        <div className="PorfolioPage-example-item-header">
          <h2 className="portfolio-h1">
            {props.headerH2}
            <SocialIcon
              className="icon"
              url={props.iconLink}
              target="_blank"
              rel="noreferrer"
            />
          </h2>
        </div>
        <Popup
          trigger={
            <div className="PorfolioPage-example-item-image">
              <img
                className="portfolio-plain-image"
                src={props.plainSrc}
                alt=""
              />
            </div>
          }
        >
          <img className="portfolio-popup-image" src={props.popSrc} alt="" />
        </Popup>
      </div>
    </div>
  );
}

export default PortfolioCard;
