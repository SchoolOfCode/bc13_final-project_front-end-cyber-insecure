import React, { useState, useEffect } from 'react'
import Navbar from '../Navbar/Navbar'
import KnowledgeBankItem from './KnowledgeBankItem'
import './KnowledgeBank.css'

export default function KnowledgeBankList() {

  const [knowledge, setKnowledge] = useState([])
  const [input, setInput] = useState('')
  
  function handleChange(e) {
    setInput(e.target.value);
  }

  useEffect(() => {
    async function getAllKnowledge() {
      const titleObject = await fetch(`http://localhost:3001/api/knowledgeBank`);
      let data = await titleObject.json();
      setKnowledge(data.payload);
    }
    getAllKnowledge()
  }, [])

  async function getByTitle() {
    const titleObject = await fetch(`http://localhost:3001/api/knowledgeBank/${input}`);
    let data = await titleObject.json();
    setKnowledge(data.payload);
  }

  return [
    <Navbar />,
    <div className='knowledge-bank-container'>
      <h1>This is the Knowledge Bank component</h1>
      <div className='input-container'>
        <input onChange={handleChange} />
        <button onClick={getByTitle}>Search</button>
      </div>
      <ul className="object-list-container">
        {knowledge.map((item) => {
          return (<KnowledgeBankItem key={item.id} title={item.title} definition={item.definition} image={item.image} article_link_one={item.article_link_one} article_link_two={item.article_link_two} video_link={item.video_link} />)
        })}
      </ul>
    </div>
  ]
}
