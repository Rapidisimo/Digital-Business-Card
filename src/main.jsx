import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import Card from './Card.jsx'
import myData from './Me.jsx'
import Info from './Info.jsx'
import Footer from './Footer.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Card />
    <Info 
      title={myData.About.title}
      text={myData.About.text}
    />
    <Info 
      title={myData.Interests.title}
      text={myData.Interests.text} 
    />
    <Footer />
  </React.StrictMode>,
)