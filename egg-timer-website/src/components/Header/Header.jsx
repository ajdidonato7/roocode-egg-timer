import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <h1>Egg Timer & Recipes</h1>
        </div>
        <nav className="nav">
          <ul>
            <li><a href="#timer">Timer</a></li>
            <li><a href="#recipes">Recipes</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;