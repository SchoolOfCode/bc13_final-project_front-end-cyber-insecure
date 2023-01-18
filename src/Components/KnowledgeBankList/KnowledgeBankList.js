import React, { useState, useEffect } from 'react'
import Navbar from '../Navbar/Navbar'
import KnowledgeBankItem from './KnowledgeBankItem'
import './KnowledgeBank.css'

const url = process.env.REACT_APP_BACKEND_URL

export default function KnowledgeBankList() {

  const [knowledge, setKnowledge] = useState([])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);


  function handleChange(e) {
    setInput(e.target.value);
  }

  useEffect(() => {
    async function getAllKnowledge() {
      const knowledge = await fetch(`${url}/api/knowledgeBank`);
      let data = await knowledge.json();
      setKnowledge(data.payload);
    }
    getAllKnowledge()
  }, [])

  async function getByTitle() {
    const titleObject = await fetch(`${url}/api/knowledgeBank/${input}`);
    let data = await titleObject.json();
    setKnowledge(data.payload);
    setInput('')
  }

  async function showAll() {
    const knowledge = await fetch(`${url}/api/knowledgeBank`);
    let data = await knowledge.json();
    setKnowledge(data.payload);
  }

  async function showJS() {
    const knowledge = await fetch(`${url}/api/knowledgeBank/category/JavaScript`);
    let data = await knowledge.json();
    setKnowledge(data.payload);
  }

  async function showGeneral() {
    const knowledge = await fetch(`${url}/api/knowledgeBank/category/General`);
    let data = await knowledge.json();
    setKnowledge(data.payload);
  }

  async function showHTML() {
    const knowledge = await fetch(`${url}/api/knowledgeBank/category/HTML`);
    let data = await knowledge.json();
    setKnowledge(data.payload);
  }

  async function showCSS() {
    const knowledge = await fetch(`${url}/api/knowledgeBank/category/CSS`);
    let data = await knowledge.json();
    setKnowledge(data.payload);
  }

  async function showReact() {
    const knowledge = await fetch(`${url}/api/knowledgeBank/category/React`);
    let data = await knowledge.json();
    setKnowledge(data.payload);
  }

  return [
    <Navbar />,
    <div className='knowledge-bank-container'>
      <div className='knowledge-bank-header'>
        <div className='knowledge-bank-header-text'>
          <h1>Refresh your knowledge using our comprehensive knowledge bank</h1>
        </div>
        <div className='input-container'>
          <input value={input} onChange={handleChange} />
          <button className='knowledge-buttons' onClick={getByTitle}>Search</button>
        </div>
        <div className='knowledge-category-buttons'>
          <button className='knowledge-buttons' onClick={showAll}> Show all </button>
          <button className='knowledge-buttons' onClick={showGeneral}> General </button>
          <button className='knowledge-buttons' onClick={showJS}> JavaScript </button>
          <button className='knowledge-buttons' onClick={showHTML}> HTML </button>
          <button className='knowledge-buttons' onClick={showCSS}> CSS </button>
          <button className='knowledge-buttons' onClick={showReact}> React </button>
        </div>
      </div>
      {loading ? (
        <div className="loader-container">
          <div className="spinner"></div>
        </div>
      ) : (
        <ul className="object-list-container">
          {knowledge.map((item) => {
            return (<KnowledgeBankItem key={item.id} title={item.title} definition={item.definition} image={item.image} article_link_one={item.article_link_one} article_link_two={item.article_link_two} video_link={item.video_link} />)
          })}
        </ul>
      )}
    </div>

  ]
}
