import React from 'react'
import {Router} from 'react-router-dom'
import history from './history'
import {Navbar, Footer} from './components'
import Routes from './routes'

const App = () => {
  return (
    <div id='whole-page'>
      <Router history={history}>
        <Navbar id='grid-navbar' />
        <Routes id='grid-body'/>
        <Footer id='grid-footer'/>
      </Router>
    </div>
  )
}

export default App
