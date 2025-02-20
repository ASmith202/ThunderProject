import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [count, setCount] = useState(0) 
  const [question, setQuestion] = useState('') 
  const apiUrl = 'https://opentdb.com/api.php?amount=1&category=9&difficulty=medium&type=boolean';

  async function fetchTrivia() {
    try {
      const response = await axios.get(apiUrl);
      const data = response.data;
      if (data.results && data.results.length > 0) {
        setQuestion(data.results[0].question); 
      }
    } catch (error) {
      console.error("Error fetching trivia:", error);
    }
  }
  
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={fetchTrivia}>
          Give me a question
        </button>
        {question && <p><strong>Trivia Question: </strong>{question}</p>} 
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
