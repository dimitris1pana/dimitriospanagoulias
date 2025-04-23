// src/components/Navbar.js
import { useState } from 'react';
import { Link } from 'react-router-dom';


const Navbar = ({ onToggleTheme, currentTheme }) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <nav className="navbar">
        <button className="hamburger" onClick={toggleMenu}>
          <span className="hamburger-icon">☰</span>
        </button>
        
        <div className={`nav-content ${isOpen ? 'active' : ''}`}>
          <ul className="no-bullets">
            <li>
              <div className="nav-buttons">
                <Link to="/" className="nav-button" onClick={() => setIsOpen(false)}>
                  <span>🌀</span>About
                </Link>
                <Link to="/projects" className="nav-button" onClick={() => setIsOpen(false)}>
                  <span>💾</span>Projects
                </Link>
                <Link to="/publications" className="nav-button" onClick={() => setIsOpen(false)}>
                  <span>📚</span>Publications
                </Link>
              </div>
            </li>
          </ul>
          <button className="toggle-button" onClick={onToggleTheme}>
            {currentTheme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
          </button>
        </div>
      </nav>
    );
  };
  

export default Navbar;


{/* <Link to="/">Home</Link><>-</> */}