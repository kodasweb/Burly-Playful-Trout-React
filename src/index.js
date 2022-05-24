import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import Home from './views/home'
import Sobrenosotros from './views/sobrenosotros'

const App = () => {
  return (
    <Router>
      <div>
        <Route exact component={Home} path="/" />
        <Route exact component={Sobrenosotros} path="/sobrenosotros" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
