import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import { KnowledgeBank } from './KnowledgeDummyData'
import KnowledgeBankItem from './KnowledgeBankItem'
import './KnowledgeBank.css'

export default function KnowledgeBankList() {

  const [input, setInput] = useState('')
  
  function handleChange(e) {
    setInput(e.target.value);
  }

  return [
    <Navbar />,
    <div className='knowledge-bank-container'>
      <h1>This is the Knowledge Bank component</h1>
      <div className='input-container'>
        <input onChange={handleChange} />
        <button>Search</button>
      </div>
      <ul className="object-list-container">
        {KnowledgeBank.map((item) => {
          return (<KnowledgeBankItem key={item.id} title={item.title} definition={item.definition} image={item.image} article_link_one={item.article_link_one} article_link_two={item.article_link_two} video_link={item.video_link} />)
        })}
      </ul>
    </div>
  ]
}
