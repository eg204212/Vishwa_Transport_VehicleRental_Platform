import React from 'react';
import NavigationBar from '../Components/NavigationBar/Navigation.jsx';
import './Booking.css';

const BookingPage = () => {
  return (
    <div className="booking-page">
     <NavigationBar/>
      <div className="blue-bar">
        <h1>Booking Your Vehicle...</h1>
      </div>
      <div className="content">
        <div className="left-section">
          <img src="your-image-url.jpg" alt="Vehicle" />
        </div>
        <div className="right-section">
          <h2>Included in the price:</h2>
          <ul>
            <li>Feature 1</li>
            <li>Feature 2</li>
            <li>Feature 3</li>
            {/* Add more features here */}
          </ul>
        </div>
      </div>
      <div className="price-summary">
        <h2>Price Summary</h2>
        <div>
          <p>Rental fee: $xxx</p>
          <p>Additional requirement fee: $xxx</p>
          <p>Total amount: $xxx</p>
        </div>
      </div>
      <button className="book-now-btn">Book Now</button>
      <div className="driver-details">
        <h2>Driver Details</h2>
        <div>
          <label htmlFor="full-name">Full Name:</label>
          <input type="text" id="full-name" />
          <label htmlFor="mobile-no">Mobile No.:</label>
          <input type="text" id="mobile-no" />
          <label htmlFor="nic-no">NIC No.:</label>
          <input type="text" id="nic-no" />
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
