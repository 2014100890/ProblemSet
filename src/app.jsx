import './app.css'
import Home from './components/home'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import PostDetail from './components/post_detail/post_detail'
import { useEffect } from 'react'

function App({ postLoader }) {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home postLoader={postLoader} />
          </Route>
          <Route path="/a">
            <PostDetail postLoader={postLoader}></PostDetail>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
