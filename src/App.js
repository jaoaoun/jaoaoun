import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import ProfileBar from './components/layout/ProfileBar'
// import Home from './components/pages/Home'
// import About from './components/pages/About'
// import Skills from './components/pages/Skills'
// import Education from './components/pages/Education'
// import Experience from './components/pages/Experience'
// import Contact from './components/pages/Contact'

function App() {
  return (
    <Router>
      <div>
        
          <Route path="/">
            <ProfileBar />
          </Route>

        
      </div>
    </Router>
  )
}

export default App
