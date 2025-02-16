// src/components/SocialIcons.js
import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';

const SocialIcons = () => {
  return (
    <div className="d-flex justify-content-center gap-3">
      <a href="mailto:temitopemetiko@gmail.com" className="text-white">
        <FaEnvelope size={24} />
      </a>
      <a href="https://github.com/metiko" target="_blank" rel="noopener noreferrer" className="text-white">
        <FaGithub size={24} />
      </a>
      <a href="https://www.linkedin.com/in/tope-metiko-747531155/" target="_blank" rel="noopener noreferrer" className="text-white">
        <FaLinkedin size={24} />
      </a>
      <a href="tel:+2349061553895" className="text-white">
        <FaPhone size={24} />
      </a>
    </div>
  );
};

export default SocialIcons;
