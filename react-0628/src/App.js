import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

import React, { useState } from 'react'

// pages
import Home from './pages/Home'
import About from './pages/About'
import Login from './pages/Login'
import Product from './pages/Product'
import ProductNature from './pages/ProductNature'
import NotFoundPage from './pages/NotFoundPage'

function App() {
  const [auth, setAuth] = useState(false)

  return (
    <Router>
      <>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/login">Login</Link>
        <Link to="/product">Product</Link>

        <Switch>
          {/* redirect */}
          <Route exact path="/">
            <Home auth={auth} />
          </Route>
          <Route path="/about">
            <About auth={auth} />
          </Route>
          <Route exact path="/login">
            <Login auth={auth} setAuth={setAuth} />
          </Route>
          {/* query string */}
          <Route path="/product/nature">
            <ProductNature auth={auth} />
          </Route>
          {/* parameter */}
          <Route path="/product/:id?">
            <Product auth={auth} />
          </Route>
          {/* 404 */}
          <Route exact path="*">
            <NotFoundPage />
          </Route>
        </Switch>
      </>
    </Router>
  )
}

export default App
