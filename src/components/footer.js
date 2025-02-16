import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';

function Footer() {
  return (
    <footer id="footer" className="bg-dark text-white text-center py-3">
      <div className="container">
        <p className="mb-1">© {new Date().getFullYear()} Temitope Metiko</p>
        <div className="d-flex justify-content-center gap-3">
          <a href="mailto:temitopemetiko@gmail.com" className="text-white" aria-label="Email">
            <FaEnvelope size={24} />
          </a>
          <a href="https://github.com/metiko" target="_blank" rel="noopener noreferrer" className="text-white" aria-label="GitHub">
            <FaGithub size={24} />
          </a>
          <a href="https://www.linkedin.com/in/tope-metiko-747531155/" target="_blank" rel="noopener noreferrer" className="text-white" aria-label="LinkedIn">
            <FaLinkedin size={24} />
          </a>
          <a href="tel:+2349061553895" className="text-white" aria-label="Phone">
            <FaPhone size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
