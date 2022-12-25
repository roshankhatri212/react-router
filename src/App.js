import React from 'react';
import {BrowserRouter as Router,Routes,Route, Link } from 'react-router-dom';
import './App.css'


const Home = () => {
  return (
    <div>
    <h1>Home</h1>
    <img src="https://reactjs.org/logo-og.png" alt="React Image" />
    </div>
  )
}

const About = () => {
  return (
    <div>
    <h1>About</h1>
    <img src="https://cdn.pixabay.com/photo/2014/08/15/06/16/imprint-418594_960_720.jpg" alt="About Image" />
    </div>
  )
}

const Contact =  () => {
  return (
    <div>
    <h1>Contact</h1>
    <img src="https://cdn.pixabay.com/photo/2017/12/02/14/38/contact-us-2993000_960_720.jpg" alt="Contact Image" />

    </div>
  )
}

function App() {
  return (
    <Router>
    <div>
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

