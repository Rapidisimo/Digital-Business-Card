import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import myData from './Me.jsx'
import Card from './Card.jsx'
import Info from './Info.jsx'
import Footer from './Footer.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Card 
      Photo={myData.Photo}
      Name={myData.Name}
      Title={myData.Title}
      Website={myData.Website}
      WebShort={myData.WebShort}
      QRCode={myData.QRCode}
      Vfile={myData.Vfile}
      Vname={myData.Vname}
      Email={myData.Email}
      LinkedIn={myData.LinkedIn}
    />
    <Info 
      title={myData.About.title}
      text={myData.About.text}
    />
    <Info 
      title={myData.Interests.title}
      text={myData.Interests.text} 
    />
    <Footer 
      Twitter={myData.Twitter}
      YouTube={myData.YouTube}
      Instagram={myData.Instagram}
      GitHub={myData.GitHub}
    />
  </React.StrictMode>,
)