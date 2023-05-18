import React from 'react'
import ReactDOM from 'react-dom/client'
import Card from './Card.jsx'
import About from './About.jsx'
import Interests from './Interests.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Card />
    <About />
    <Interests />
  </React.StrictMode>,
)
