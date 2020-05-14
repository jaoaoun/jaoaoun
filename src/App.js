import React from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
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
        <Switch>
          <Route path="/">
            <ProfileBar />
          </Route>
{/*           
          <Route path="/About">
            <About />
          </Route>
          <Route path="/Skills">
            <Skills />
          </Route>
          <Route path="/Education">
            <Education />
          </Route>
          <Route path="/Experience">
            <Experience />
          </Route>
          <Route path="/Contact">
            <Contact />
          </Route> */}
        </Switch>
      </div>
    </Router>
  )
}

export default App
