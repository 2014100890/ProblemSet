import Home from './components/home'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import PostDetail from './components/post_detail/post_detail'
import { useEffect } from 'react'

function App({ postLoader }) {
  return (
    <BrowserRouter>
      <main>
        <div className="h-4 bg-gradient-to-r from-blue-500  to-green-500"></div>
        <Switch>
          <Route exact path="/">
            <Home postLoader={postLoader} />
          </Route>
          <Route path="/a">
            <PostDetail postLoader={postLoader}></PostDetail>
          </Route>
        </Switch>
      </main>
    </BrowserRouter>
  )
}

export default App
