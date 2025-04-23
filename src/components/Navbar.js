// src/components/Navbar.js
import { Link } from 'react-router-dom';


const Navbar = ({ onToggleTheme, currentTheme }) => (
    <nav className="navbar" style={{ display: 'flex', alignItems: 'center' }}>
<ul className="no-bullets">
<li> <div className="nav-buttons">
          <Link to="/" className="nav-button">
            <span>🌀</span>About
          </Link>
          <Link to="/projects" className="nav-button">
            <span>💾</span>Projects
          </Link>
        </div></li>

    </ul>
    <button className="toggle-button" onClick={onToggleTheme}>
      {currentTheme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
    </button>
  </nav>
);

export default Navbar;


{/* <Link to="/">Home</Link><>-</> */}