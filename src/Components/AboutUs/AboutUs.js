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
      <div className="about-us-mission">
        <p99>
          Meet the deVault developers! Calla, Constantin, Barbara, Miko and
          Taylor are School of Code bootcamp graduates. The deVault team built
          this site for their final 4-week team project - after just 12 weeks of
          coding experience! They were tasked with building a full-stack
          application that solves a real-world problem and they though to
          themselves - "why not solve a problem that we know well and have some
          great ideas about how to solve?". As a junior developer, it can be
          hard to keep track of your professional development and job-seeking
          journey. If only there was an app that could allow junior developers
          to do this in one space...
          <br />
          <br />
          Introducing DeVault, the ultimate tool for junior developers! DeVault
          enables you to stay organised and maximise your job search potential.
          Track your job applications, optimise your CV and your portfolio,
          search for specific knowledge, prepare for interviews and even take
          quizzes. With DeVault, you can stay on top of your job search and put
          your best foot forward.
          <br />
          <br />
          Get started today and take your development career to the next level!
        </p99>
      </div>
      <div className="all-of-us">
        <div className="developer">
          <h2>Calla</h2>
          <img className="dev-img" src={calla} alt="Calla" />
          <p>
            I used to spend my time moderating interviews and focus groups. Now,
            instead of asking questions, I want to solve problems and answer
            important tech questions with code.
          </p>
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
          <h2>Constantin</h2>
          <img className="dev-img" src={constantin} alt="Constantin" />
          <p>When I am not coding or learning about new technologies, I enjoy playing video games with friends, travelling, anything about  motorcycles, filming with my GoPro and watching old movies.</p>
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
          <h2>Barbara</h2>
          <img className="dev-img" src={barbara} alt="Barbara" />
          <p>I moved to the UK from France in 2017, hoping for a fresh start. I stumbled into code and fell in love with it. When I'm not coding I love playing video games, watching horror movies, true crime and reading.</p>
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
          <h2>MiKO</h2>
          <img className="dev-img" src={miko2} alt="MiKo" />
          <p>
            Before bootcamp I used to drive double-decker lorries on narrow
            streets of London where I developed my ability to solve problems in
            no time and then I discovered code. Ever since my life is dedicated
            to it!
          </p>
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
          <h2>Taylor</h2>
          <img className="dev-img" src={taylor2} alt="Taylor" />
          <p>
            After travelling the world on a plane for three years, I
            decided to fly my way to code and the world of software development.
          </p>
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
