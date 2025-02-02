import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

function Header() {
  const [visible, setVisible] = useState(true);
  let lastScrollY = window.scrollY;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top"
      animate={{ y: visible ? 0 : -100 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <a className="navbar-brand" href="#">My Portfolio</a>
      </div>
    </motion.nav>
  );
}

export default Header;
