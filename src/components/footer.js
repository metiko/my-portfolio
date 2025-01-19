import React from 'react';

function Footer() {
  return (
    <footer className="bg-dark text-white py-3">
      <div className="container text-center">
        <p>&copy; {new Date().getFullYear()} My Portfolio. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
