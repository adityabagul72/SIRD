import React, { useState, useEffect } from 'react';
import './index.css';
import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Academics from './components/Academics';
import InternationalCollaborations from './components/InternationalCollaborations';
import Students from './components/Students';
import AboutUs from './components/AboutUs';
import InternationalMous from './components/InternationalMous';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/international-collaborations" element={<InternationalCollaborations />} />
          <Route path="/students" element={<Students />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/international-mous" element={<InternationalMous />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
