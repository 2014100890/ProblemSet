import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './app.jsx'
import PostLoader from './service/loadposts.js'

const postLoader = new PostLoader(process.env.REACT_APP_API_TOKEN)

ReactDOM.render(
  <React.StrictMode>
    <App postLoader={postLoader} />
  </React.StrictMode>,
  document.getElementById('root')
)
