import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
//npm install react-router-dom@6

import Cards from './Components/Cards/Cards'
import Form from './Components/Form/Form'

import './App.css'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" >
            <Route 
              index 
              element={<Cards />} 
            />
            <Route 
              path="form"
              element={<Form className='container'/>}
            />
          </Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App