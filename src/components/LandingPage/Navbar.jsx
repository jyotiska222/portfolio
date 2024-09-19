import React, { useState } from 'react';
import './Navbar.css';
import { RiMenu4Line } from "react-icons/ri";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <a href="/" className="navbar-brand-text">Jyotiska's Portfolio</a>
      </div>
      <div className="menu" onClick={toggleMenu} aria-label="Menu">
        <RiMenu4Line />
      </div>
      <ul className={menuOpen ? "navbar-links open" : "navbar-links"}>
        <li><a href="#about">About</a></li>
        <li><a href="https://github.com/jyotiska222" target="_blank" rel="noopener noreferrer">Projects</a></li>
        <li className="dropdown" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
          <a href="#contact">Contact</a>
          {isDropdownOpen && (
            <ul className="dropdown-menu">
              <li><a href="https://www.instagram.com/jyotiskabiswas/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
              <li><a href="https://www.linkedin.com/in/jyotiska-biswas-019b75290" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              {/* <li><a href="mailto:yourmail@example.com">Mail</a></li> */}
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
