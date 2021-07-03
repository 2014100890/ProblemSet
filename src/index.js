import './index.css'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './app.jsx'
import PostLoader from './service/loadposts.js'

let postLoader = new PostLoader(121345)

ReactDOM.render(
  <React.StrictMode>
    <App postLoader={postLoader} />
  </React.StrictMode>,
  document.getElementById('root')
)
