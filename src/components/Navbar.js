// src/components/Navbar.js
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="bg-gray-800 p-4 text-white">
<ul className="no-bullets">
<li><h1><Link to="/about">🌀About</Link><Link to="/projects">💾Projects</Link></h1></li>
 
    </ul>
  </nav>
);

export default Navbar;


{/* <Link to="/">Home</Link><>-</> */}