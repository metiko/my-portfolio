import React from 'react';
import { Link } from 'react-scroll'; // Import react-scroll for smooth scrolling

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container">
        <a className="navbar-brand" href="#">My Portfolio</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="about" smooth={true} duration={500}>About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="skills" smooth={true} duration={500}>Skills</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="projects" smooth={true} duration={500}>Projects</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="contact" smooth={true} duration={500}>Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
