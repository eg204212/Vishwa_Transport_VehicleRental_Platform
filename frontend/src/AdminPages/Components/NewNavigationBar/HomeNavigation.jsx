import React from 'react';
import logo from './Images/Logo.png'; 
import { Link } from 'react-router-dom';
import './HomeNavigation.css';

const NewNavigationBar = () => {
  return (
    <div className='black-bar'>
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      
      <div className="nav-links">
        <ul>
        <li><Link to="/reviews" className="nav-link">REVIEWS</Link></li>
            <li><Link to="/blogs" className="nav-link">BLOGS</Link></li>
            <li><Link to="/about" className="nav-link">ABOUT</Link></li>
            <li><Link to="/login" className="highlighted">LOGIN</Link></li>
            <li><Link to="/signup" className="highlighted">SIGNUP</Link></li>
        </ul>
      </div>
    </div>
    </div>
  );
}

export default NewNavigationBar;
