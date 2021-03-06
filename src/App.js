import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"
import GlobalStyles from './globalStyles'

import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'

function App() {
  return ( 
  <>
  <GlobalStyles />
  <Router>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
    </Switch>
  </Router>
  </>
)}

export default App