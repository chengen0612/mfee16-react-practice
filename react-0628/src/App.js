import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import React, { useState } from 'react'
// pages
import Home from './pages/Home'
import About from './pages/About'
import Login from './pages/Login'

function App() {
  const [auth, setAuth] = useState(false)

  return (
    <Router>
      <>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/login">Login</Link>

        <Switch>
          <Route exact path="/">
            <Home auth={auth} />
          </Route>
          <Route path="/about">
            <About auth={auth} />
          </Route>
          <Route exact path="/login">
            <Login auth={auth} setAuth={setAuth} />
          </Route>
        </Switch>
      </>
    </Router>
  )
}

export default App
