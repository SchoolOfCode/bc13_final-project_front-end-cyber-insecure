import Navbar from "../Navbar/Navbar";
import "./AboutUs.css";
import { SocialIcon } from "react-social-icons";
import calla from "../../Images/calla.jpg";
import miko2 from "../../Images/miko2.jpg";
import taylor2 from "../../Images/taylor2.jpg";
import barbara from "../../Images/barbara.jpg";
import constantin from "../../Images/constantin2.jpg";
import React from "react";

export default function AboutUs() {
  return [
    <Navbar />,

    <div className="about-us-container">
      <div className="about-us-header">
        <h1>Meet the team who bravely built DeVault! </h1>
      </div>
      <div className="all-of-us">
        <div className="developer">
          <img className="dev-img" src={calla} alt="Calla" />
          <p>Calla</p>
          <div className="developer-shortcuts">
            <SocialIcon
              className="icon"
              url="https://www.linkedin.com/in/calla-sullivan-drage-88a7a5139/"
              target="_blank"
              rel="noreferrer"
            />
            <SocialIcon
              className="icon"
              url="mailto:c.sullivandrage@outlook.com"
              target="_blank"
              rel="noreferrer"
            />
            <SocialIcon
              className="icon"
              url="https://github.com/Callasaurus"
              target="_blank"
              rel="noreferrer"
            />
          </div>
        </div>
        <div className="developer">
          <img className="dev-img" src={constantin} alt="Constantin" />
          <p>Constantin</p>
          <div className="developer-shortcuts">
            <SocialIcon
              className="icon"
              url="https://www.linkedin.com/in/constantin-banciu-97460611b/"
              target="_blank"
              rel="noreferrer"
            />
            <SocialIcon
              className="icon"
              url="mailto:banciu.constantin@gmail.com"
              target="_blank"
              rel="noreferrer"
            />
            <SocialIcon
              className="icon"
              url="https://github.com/constantine30"
              target="_blank"
              rel="noreferrer"
            />
          </div>
        </div>
        <div className="developer">
          <img className="dev-img" src={barbara} alt="Barbara" />
          <p>Barbaraaaaaaaaa</p>
          <div className="developer-shortcuts">
            <SocialIcon
              className="icon"
              url="https://www.linkedin.com/in/rielara/"
              target="_blank"
              rel="noreferrer"
            />
            <SocialIcon
              className="icon"
              url="mailto:millon.barbara1@gmail.com"
              target="_blank"
              rel="noreferrer"
            />
            <SocialIcon
              className="icon"
              url="https://github.com/rielara"
              target="_blank"
              rel="noreferrer"
            />
          </div>
        </div>
        <div className="developer">
          <img className="dev-img" src={miko2} alt="MiKo" />
          <p>MiKo</p>
          <div className="developer-shortcuts">
            <SocialIcon
              className="icon"
              url="https://www.linkedin.com/in/mikolaj-zagrodzki-3817911a2/"
              target="_blank"
              rel="noreferrer"
            />
            <SocialIcon
              className="icon"
              url="mailto:soberfm@gmail.com"
              target="_blank"
              rel="noreferrer"
            />
            <SocialIcon
              className="icon"
              url="https://github.com/KETAMINION"
              target="_blank"
              rel="noreferrer"
            />
          </div>
        </div>
        <div className="developer">
          <img className="dev-img" src={taylor2} alt="Taylor" />
          <p>Taylor</p>
          <div className="developer-shortcuts">
            <SocialIcon
              className="icon"
              url="https://www.linkedin.com/in/charlestaylorhall/"
              target="_blank"
              rel="noreferrer"
            />
            <SocialIcon
              className="icon"
              url="mailto:charlestaylorhall05@gmail.com"
              target="_blank"
              rel="noreferrer"
            />
            <SocialIcon
              className="icon"
              url="https://github.com/CTHall05"
              target="_blank"
              rel="noreferrer"
            />
          </div>
        </div>
      </div>
    </div>,
  ];
}
