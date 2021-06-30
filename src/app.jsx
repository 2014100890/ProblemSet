import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Detailpage from './components/detail_page'
import HomePage from './components/home_page'
import GradientBar from './components/nav/gradient_bar'

function App({ postLoader }) {
  return (
    <BrowserRouter>
      <main>
        <GradientBar />
        <Switch>
          <Route exact path="/">
            <section
              style={{ width: '1000px' }}
              className="p-10 mx-auto max-w-full"
            >
              <HomePage postLoader={postLoader} />
            </section>
          </Route>
          <Route path="/a">
            <Detailpage postLoader={postLoader} />
          </Route>
        </Switch>
      </main>
    </BrowserRouter>
  )
}

export default App
