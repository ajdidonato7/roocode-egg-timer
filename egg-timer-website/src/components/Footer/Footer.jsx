import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {currentYear} Egg Timer & Recipes. All rights reserved.</p>
        <p>
          <small>
            A simple website for timing your eggs and finding delicious egg recipes.
          </small>
        </p>
      </div>
    </footer>
  );
};

export default Footer;