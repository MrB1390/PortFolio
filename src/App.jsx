import React from 'react';
import Home from './components/Home';
import Navbar from './components/Navbar';
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './components/About';
import Projects from './components/Projects';
import Resume from './components/Resume';

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <div>
      <Navbar />
      </div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About />} />
        <Route path='/project' element={<Projects />} />
        <Route path='/resume' element={<Resume />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;