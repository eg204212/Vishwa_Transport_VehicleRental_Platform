import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from './Images/Logo.png';
import accountIcon from './Images/dave.png';
import menuIcon from './Images/menu.png';
import dropIcon from './Images/drop.png';
import './Navigation.css';

const NavigationBar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  return (
    <div>
      <div className='navbar'>
        <div className='menu-icon' onClick={toggleSidebar}>
          <img src={menuIcon} alt='Menu' />
        </div>
        <div className='logo'>
          <img src={logo} alt='Logo' />
        </div>
        
        <div className='nav-links'>
          <ul>
            <li>
              <Link to='/' className='nav-link'>
                HOME
              </Link>
            </li>
            <li>
              <Link to='/vehicle-list' className='nav-link'>
                VEHICLE LIST
              </Link>
            </li>
            <li className='account-info'>
              <img src={accountIcon} alt='Account' className='icon' />
              <div className='empty-box' onClick={toggleDropdown}>
                Mr. Dave Santha
                <img
                  src={dropIcon}
                  alt='Dropdown'
                  className={`dropdown-icon ${dropdownOpen ? 'open' : ''}`}
                />
                {dropdownOpen && (
                  <div className='dropdown-menu' onClick={closeDropdown}>
                    <ul>
                      <li><Link to='/dashboard'>Dashboard</Link></li>
                      <li><Link to='/profile'>Profile</Link></li>
                      <li><Link to='/logout'>Logout</Link></li>
                    </ul>
                  </div>
                )}
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
        <div className='close-btn' onClick={toggleSidebar}>
          &times;
        </div>
        <ul>
          <li className={location.pathname === '/ManageVehicles' ? 'active' : ''}>
            <Link to='/ManageVehicles'>Manage Vehicles</Link>
          </li>
          <li className={location.pathname === '/PostVehicle' ? 'active' : ''}>
            <Link to='/PostVehicle'>Post Vehicle</Link>
          </li>
          <li className={location.pathname === '/AllBooking' ? 'active' : ''}>
            <Link to='/AllBooking'>Booking Details</Link>
          </li>
          <li className={location.pathname === '/RegisteredUsers' ? 'active' : ''}>
            <Link to='/RegisteredUsers'>Registered Users</Link>
          </li>
          <li className={location.pathname === '/ReviewRatings' ? 'active' : ''}>
            <Link to='/ReviewRatings'>Reviews and Ratings</Link>
          </li>
        </ul>
      </div>

      {sidebarOpen && <div className='overlay' onClick={toggleSidebar}></div>}
    </div>
  );
};

export default NavigationBar;
