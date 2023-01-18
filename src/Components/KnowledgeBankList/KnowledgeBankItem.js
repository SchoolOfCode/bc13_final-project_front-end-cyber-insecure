import React from "react";
import "./KnowledgeBank.css";
import Popup from "reactjs-popup";

export default function KnowledgeBankItem(props) {
  return (
    <div className="knowledge-bank-item">
      <div className="knowledge-bank-first-third">
        <div className="knowledge-bank-first-third-top">
          <h2> {props.title}</h2>
        </div>
        <div className="knowledge-bank-first-third-bottom">
          <Popup trigger={<img src={props.image} alt="" />}>
            <img className="knowledge-pop-up" src={props.image} alt="" />
          </Popup>
        </div>
      </div>
      <div className="knowledge-bank-middle-third">
        <div className="knowledge-bank-middle-third-top">
          <h2> Definition </h2>
        </div>
        <div className="knowledge-bank-middle-third-bottom">
          <p className="knowledge-bank-text"> {props.definition}</p>
        </div>
      </div>
      <div className="knowledge-bank-last-third">
        <div className="knowledge-bank-last-third-top">
          <h2> Resource links </h2>
        </div>
        <div className="knowledge-bank-last-third-bottom">
          <a
            className="knowledge-bank-text"
            href={props.article_link_one}
            target="_blank"
            rel="noreferrer"
          >
            Article example 1
          </a>
          <a
            className="knowledge-bank-text"
            href={props.article_link_two}
            target="_blank"
            rel="noreferrer"
          >
            Article example 2
          </a>
          <a
            className="knowledge-bank-text"
            href={props.video_link}
            target="_blank"
            rel="noreferrer"
          >
            Video example
          </a>
        </div>
      </div>
    </div>
  );
}
