import React, { useState } from 'react';
import './AdminProfile.css';
import NavigationBar from '../Components/NavigationBar/Navigation.jsx';
import Dashboard from '../Components/DashBoard/Dashboard.jsx';
import addPhotoIcon from './Images/add_photo_icon.png';

const AdminProfile = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [userName, setUserName] = useState(''); 

  const handlePhotoChange = (event) => {
    const file = event.target.files[0];
    setSelectedPhoto(file);
  };

  return (
    <div>
      <NavigationBar /> 
      <Dashboard />
      <div className="profile-page">
        <div className="profile-info">
          <h2>Profile Info</h2>
          <button className="edit-profile-button">Edit Profile</button>
        </div>
        <div className="profile-details">
          <div className="profile-photo">
            <label htmlFor="photo-upload" className="add-photo-button">
              {selectedPhoto ? (
                <img src={URL.createObjectURL(selectedPhoto)} alt="Selected Photo" />
              ) : (
                <div className="add-photo-icon">
                  <img src={addPhotoIcon} alt="Add Photo" />
                  <div className="add-photo-placeholder">Add Photo</div>
                </div>
              )}
              <input
                id="photo-upload"
                type="file"
                accept="image/*"
                onChange={handlePhotoChange}
                style={{ display: 'none' }}
              />
            </label>
            <div className="username">{userName}</div>
          </div>
          <div className="user-details">
            <div className="detail">
              <label>First Name:</label>
              <input type="text" />
            </div>
            <div className="detail">
              <label>Last Name:</label>
              <input type="text" />
            </div>
            <div className="detail">
              <label>Email/Contact No:</label>
              <input type="text"  />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminProfile;
