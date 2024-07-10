import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './BookingDetails.css';
import NavBar from '../../Components/NavBar/NavBar.js';

const BookingDetails = () => {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    fullname: '',
    MobileNO: '',
    Address: '',
    LicenseNo: '',
    PickupDate: '',
    PickupTime: '',
    DropoffDate: '',
    DropoffTime: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5001/api/v1/booking', {
        ...formData,
        vehicleId: id
      });
      alert('Booking successful');
      navigate(`/vehicle/${id}`); // Redirect to VehicleFullDetails page
    } catch (error) {
      console.error('Error creating booking:', error);

      if (error.response) {
        console.error('Server responded with an error:', error.response.data);
        alert(`Error: ${error.response.data.message}`);
      } else if (error.request) {
        console.error('No response received:', error.request);
        alert('Error: No response from server. Please try again later.');
      } else {
        console.error('Error:', error.message);
        alert(`Error: ${error.message}`);
      }
    }
  };

  return (
    <div className="container">
      <NavBar />
      <div className='booking-form'>
      <h2>Booking Details</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Full Name</label>
          <input type="text" name="fullname" value={formData.fullname} onChange={handleChange} required />
        </div>
        <div>
          <label>Mobile Number</label>
          <input type="text" name="MobileNO" value={formData.MobileNO} onChange={handleChange} required />
        </div>
        <div>
          <label>Address</label>
          <input type="text" name="Address" value={formData.Address} onChange={handleChange} required />
        </div>
        <div>
          <label>License Number</label>
          <input type="text" name="LicenseNo" value={formData.LicenseNo} onChange={handleChange} required />
        </div>
        <div className="datetime-container">
          <div className="datetime-field">
            <label>Pickup Date</label>
            <input type="date" name="PickupDate" value={formData.PickupDate} onChange={handleChange} required />
          </div>
          <div className="datetime-field">
            <label>Pickup Time</label>
            <input type="time" name="PickupTime" value={formData.PickupTime} onChange={handleChange} required />
          </div>
        </div>
        <div className="datetime-container">
          <div className="datetime-field">
            <label>Dropoff Date</label>
            <input type="date" name="DropoffDate" value={formData.DropoffDate} onChange={handleChange} required />
          </div>
          <div className="datetime-field">
            <label>Dropoff Time</label>
            <input type="time" name="DropoffTime" value={formData.DropoffTime} onChange={handleChange} required />
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
      </div>
    </div>
  );
};

export default BookingDetails;
