import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Projects from './components/pages/Projects';
import AboutMe from './components/pages/AboutMe';
import Contact from './components/pages/Contact';


function App() {
  return (
   <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/home' exact element={<Home/>} />
        <Route path='/projects' exact element={<Projects/>} />
        <Route path='/aboutme' exact element={<AboutMe/>} />
        <Route path='/contact' exact element={<Contact/>} />
      </Routes>
    </Router>
   </>
  );
}

export default App;
