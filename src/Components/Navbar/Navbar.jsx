import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';  // Import the CSS for styling

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="nav-wrapper">
      <div className="nav-left">
        <Link to="/Home" className="nav-link">Home</Link>
        <Link to="/Blog" className="nav-link">Blog</Link>
        <Link to="/Contact" className="nav-link">Contact</Link>
      </div>
      <div className="nav-right">
        <h1>Moazzam's Placeholder</h1>
      </div>

      {/* Hamburger Menu Icon */}
      <div className={`hamburger ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>

      {/* Navigation Links */}
      <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <Link to="/Home" className="nav-link">Home</Link>
        <Link to="/Blog" className="nav-link">Blog</Link>
        <Link to="/Contact" className="nav-link">Contact</Link>
      </div>
    </div>
  );
}

export default Navbar;
