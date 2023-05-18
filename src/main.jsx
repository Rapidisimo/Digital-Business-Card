import React from 'react'
import ReactDOM from 'react-dom/client'

import Card from './Card.jsx'
import Info from './Info.jsx'
// import interests from './Me.jsx'
// import About from './About.jsx'
// import Interests from './Interests.jsx'
import './index.css'
import myData from './Me.jsx'


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
  </React.StrictMode>,
)

// root.render(
//   <Comment
//     date={comment.date}
//     text={comment.text}
//     author={comment.author} />
// );