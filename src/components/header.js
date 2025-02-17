import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll'; // Import react-scroll for smooth scrolling

function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Check localStorage for the saved theme on load
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
    }
  }, []);

  // Toggle theme and save it to localStorage
  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  // Apply dark mode to the body
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container">
        <a className="navbar-brand" href="#">My Portfolio</a>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav" 
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link 
                className="nav-link" 
                to="about" 
                smooth={true} 
                duration={500} 
                activeClass="active"
                spy={true}
                offset={-70} // Adjust to account for the fixed navbar height
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className="nav-link" 
                to="skills" 
                smooth={true} 
                duration={500} 
                activeClass="active"
                spy={true}
                offset={-70}
              >
                Skills
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className="nav-link" 
                to="projects" 
                smooth={true} 
                duration={500} 
                activeClass="active"
                spy={true}
                offset={-70}
              >
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className="nav-link" 
                to="contact" 
                smooth={true} 
                duration={500} 
                activeClass="active"
                spy={true}
                offset={-70}
              >
                Contact
              </Link>
            </li>
            <li className="nav-item">
              {/* Dark mode toggle button */}
              <button 
                className="btn btn-outline-light" 
                onClick={toggleTheme}
                aria-label="Toggle Dark Mode"
              >
                {isDarkMode ? 'Light Mode' : 'Dark Mode'}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
