import React from 'react'
import {Router} from 'react-router-dom'
import history from './history'
import {Navbar, Footer} from './components'
import Routes from './routes'

const App = () => {
  return (
    <div id='whole-page'>
      <Router history={history}>
        <Navbar />
        <Routes />
        <Footer />
      </Router>
    </div>
  )
}

export default App
