import Home from './components/home'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import PostDetail from './components/post_detail/post_detail'
import GradientBar from './components/gradient_bar/gradient_bar'
import React, { useEffect } from 'react'

function App({ postLoader }) {
  return (
    <BrowserRouter>
      <main>
        <GradientBar />
        <section
          style={{ width: '1000px' }}
          className="p-10 mx-auto max-w-full"
        >
          <Switch>
            <Route exact path="/">
              <Home postLoader={postLoader} />
            </Route>
            <Route path="/a">
              <PostDetail postLoader={postLoader}></PostDetail>
            </Route>
          </Switch>
        </section>
      </main>
    </BrowserRouter>
  )
}

export default App
