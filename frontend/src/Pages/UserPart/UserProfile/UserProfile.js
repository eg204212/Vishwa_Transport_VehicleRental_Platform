import React, { useState, useRef } from 'react';
import './UserProfile.css';
import UserDashboard from '../../../Components/UserDashboard/UserDashboard.js';

const UserProfile = () => {
    const [firstName, setFirstName] = useState('John');
    const [lastName, setLastName] = useState('Doe');
    const [email, setEmail] = useState('john.doe@example.com');
    const [mobileNo, setMobileNo] = useState('1234567890');
    const [image, setImage] = useState('');
    const fileInputRef = useRef(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            setImage(reader.result);
        };
        if (file) {
            reader.readAsDataURL(file);
        }
    };

    const handleAddImageButtonClick = () => {
        fileInputRef.current.click();
    };

    const handleSave = () => {
        // Add logic to save user profile changes
        console.log('Changes saved');
    };

    return (
        <div className="user-profile-container">
            <UserDashboard />
            <div className="user-profile-content">
                <div className="tab">User Profile</div>
                <div className="image-container">
                    <img src={image || './images/user_profileImage.png'}  />
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        ref={fileInputRef}
                        style={{ display: 'none' }}
                    />
                    <button className="add-image-button" onClick={handleAddImageButtonClick}>Add Image</button>
                </div>
                <div className="input-group">
                    <label>First Name:</label>
                    <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                </div>
                <div className="input-group">
                    <label>Last Name:</label>
                    <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                </div>
                <div className="input-group">
                    <label>Email/Mobile:</label>
                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="input-group">
                    <button className="save-button" onClick={handleSave}>Save</button>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;
