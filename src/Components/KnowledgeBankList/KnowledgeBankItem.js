import React from "react";
import "./KnowledgeBank.css";
import Popup from "reactjs-popup";

export default function KnowledgeBankItem(props) {
  return (
      <div className='knowledge-bank-item'>
          <div className='knowledge-bank-first-third'>
              <h2> {props.title}</h2>
              <Popup trigger={<img src={props.image} alt='' />}>
                {/* <div className="knowledge-pop-up-background"> */}
                  <img className='knowledge-pop-up' src={props.image} alt='' />
                  {/* </div> */}
              </Popup>
          </div>
          <div className='knowledge-bank-middle-third'>
              <h2> Definition </h2>
              <p className='knowledge-bank-text'> {props.definition}</p>
          </div>
          <div className='knowledge-bank-last-third'>
              <h2> Resource links </h2>
              <a className='knowledge-bank-text' href={props.article_link_one} target="_blank" rel="noreferrer"> Article example 1</a>
              <a className='knowledge-bank-text' href={props.article_link_two} target="_blank" rel="noreferrer"> Article example 2</a>
              <a className='knowledge-bank-text' href={props.video_link} target="_blank" rel="noreferrer"> Video example </a>
          </div>
      </div>
  )

  
        
          
  

        
  
  

}