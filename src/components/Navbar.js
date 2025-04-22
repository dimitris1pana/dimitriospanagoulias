// src/components/Navbar.js
import { Link } from 'react-router-dom';

const Navbar = ({ onToggleTheme, currentTheme }) => (
    <nav className="navbar" style={{ display: 'flex', alignItems: 'center' }}>
<ul className="no-bullets">
<li><h1><Link to="/">🌀About</Link><Link to="/projects">💾Projects</Link></h1></li>
 
    </ul>
    <button className="toggle-button" onClick={onToggleTheme}>
      {currentTheme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
    </button>
  </nav>
);

export default Navbar;


{/* <Link to="/">Home</Link><>-</> */}