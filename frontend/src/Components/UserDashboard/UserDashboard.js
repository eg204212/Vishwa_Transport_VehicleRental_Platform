import React from 'react';
import './UserDashboard.css'; 
import NavBar from '../NavBar/NavBar.js';
import { Link, useLocation } from 'react-router-dom';

const UserDashboard = () => {
  const location = useLocation();

  return (
    <div>
      <NavBar/>
      <div className="adashboard">
        <h2 className='Dashboard'>Dashboard</h2>
        <ul>
          <li className={location.pathname === '/userprofile' ? 'active' : ''}>
            <Link to="/userprofile">Profile</Link>
          </li>
          <li className={location.pathname === '/UserBookings' ? 'active' : ''}>
            <Link to="/UserBookings">Booking</Link>
          </li>
          <li className={location.pathname === '/cart' ? 'active' : ''}>
            <Link to="/cart">Cart</Link>
          </li>
          <li className={location.pathname === '/ReviewAndRating' ? 'active' : ''}>
            <Link to="/ReviewRatings">Review and Ratings</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UserDashboard;
