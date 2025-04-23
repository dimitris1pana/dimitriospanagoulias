// src/App.js
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import './App.css';
import { useEffect, useState } from 'react';
import ScrollToTop from './components/ScrollToTpo';
import HeaderBanner from './components/HeaderBannder';
import Publications from './components/Publications';

function App() {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };
  useEffect(() => {
    document.body.className = theme;
  }, [theme])

  return (
    <div>
      <Navbar onToggleTheme={toggleTheme} currentTheme={theme} />
      <HeaderBanner  onToggleTheme={toggleTheme} currentTheme={theme}/>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/publications" element={<Publications />} />

      </Routes>
      <ScrollToTop />

    </div>
  );
}

export default App;