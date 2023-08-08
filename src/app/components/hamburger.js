"use client"
import './hamburger.css'
import React, { useState } from 'react';

const MenuAnimation = () => {
  const [isActive, setIsActive] = useState(false);

  const handleHamburgerClick = () => {
    setIsActive(!isActive);
  };

  const handleNavLinkClick = () => {
    setIsActive(false);
  };

  return (
    <div>
      <div className={`hamburger ${isActive ? 'active' : ''}`} onClick={handleHamburgerClick}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <div className={`nav-menu ${isActive ? 'active' : ''}`} onClick={handleHamburgerClick}>
      <div>
        <ul className="menu-left">
          <li className="home"><a href="#">Home</a></li>
          <li className="pricing"><a href="#">Pricing</a></li>
          <li className="events"><a href="#">Events</a></li>
          <li className="contact"><a href="#">Contact</a></li>
        </ul>
        <ul className="menu-right">
          <li className="login"><a href="#">Login</a></li>
          <li className="start"><a href="#" className="btn btn-white">Get Started</a></li>
        </ul>
      </div>
    </div>
    </div>
  );
};

export default MenuAnimation;
