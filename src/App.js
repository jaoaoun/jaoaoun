import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ProfileBar from './components/layout/ProfileBar';
import Home from './components/pages/Home'
import About from './components/pages/About'



function App() {
  return (
    
      <Router>
        <div>
          <Switch>
            <Route path="/">
              <ProfileBar/>
            </Route>
            <Route path="/Home">
              <Home/>
            </Route>
            <Route path="/About">
              <About/>
            </Route>
          </Switch>
        </div>
      </Router>

      
    
  );
}

export default App;
