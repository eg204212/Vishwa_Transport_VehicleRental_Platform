import React, { useState } from 'react';
import './ManageContactUs.css'; // Import CSS file for styling
import NavigationBar from '../Components/NavigationBar/Navigation.jsx'; // Import the NavigationBar component
import Dashboard from '../Components/DashBoard/Dashboard.jsx';
import contactUsImage from './Images/contactus.png'; // Import the image

const ManageContactUs = () => {
  // Default values for the contact details
  const [companyName, setCompanyName] = useState('Company XYZ');
  const [fullName, setFullName] = useState('John Doe');
  const [address, setAddress] = useState('123 Main St, Cityville');
  const [contactNo, setContactNo] = useState('123-456-7890');
  const [email, setEmail] = useState('john.doe@example.com');
  const [isEditing, setIsEditing] = useState(false);

  // Function to handle edit button click
  const handleEditClick = () => {
    setIsEditing(!isEditing); // Toggle the editing mode
  };

  // Function to handle save button click
  const handleSaveClick = () => {
    setIsEditing(false);
    // Save changes to backend or perform other operations here
  };

  return (
    <div>
      <NavigationBar />
      <Dashboard />
      <div className="manage-contact-us-page">
        <div className="manage-contact-us-header">
          <h2>Manage Contact Us</h2>
          {isEditing ? (
            <button className="edit-button" onClick={handleSaveClick}>Save</button>
          ) : (
            <button className="edit-button" onClick={handleEditClick}>Edit</button>
          )}
        </div>
        <div className="contact-container">
          <div className="contact-details">
            <div className="contact-field">
              <label htmlFor="company-name">Company Name:</label>
              <p>{companyName}</p>
            </div>
            <div className="contact-field">
              <label htmlFor="full-name">Full Name:</label>
              {isEditing ? (
                <input
                  type="text"
                  id="full-name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
              ) : (
                <p>{fullName}</p>
              )}
            </div>
            <div className="contact-field">
              <label htmlFor="address">Address:</label>
              {isEditing ? (
                <input
                  type="text"
                  id="address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              ) : (
                <p>{address}</p>
              )}
            </div>
            <div className="contact-field">
              <label htmlFor="contact-no">Contact No:</label>
              {isEditing ? (
                <input
                  type="text"
                  id="contact-no"
                  value={contactNo}
                  onChange={(e) => setContactNo(e.target.value)}
                />
              ) : (
                <p>{contactNo}</p>
              )}
            </div>
            <div className="contact-field">
              <label htmlFor="email">Email:</label>
              {isEditing ? (
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              ) : (
                <p>{email}</p>
              )}
            </div>
          </div>
          <img src={contactUsImage} alt="Contact Us" className="contact-image" />
        </div>
      </div>
    </div>
  );
}

export default ManageContactUs;
