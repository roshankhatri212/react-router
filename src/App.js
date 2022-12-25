import React from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import {BrowserRouter as Router,Routes,Route, Link } from 'react-router-dom';
import './App.css'


function App() {
  return (
    <Router>
    <div class="header">
       <li> <Link to="/">Home</Link></li>
        

       <li><Link to="/about">About</Link></li>

       <li><Link to="/contact">Contact</Link></li>

    </div>

    <Routes>
    <Route path='/' element={<Home/>} />

    <Route path='/about' element={<About/>} />


    <Route path='/contact' element={<Contact/>} />
      
    </Routes>
    </Router>
  )
}
export default App;

