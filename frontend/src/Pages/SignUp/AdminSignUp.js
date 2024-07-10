import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './SignUp.css';
import Footer from '../../AdminPages/Components/Footer/Footer.jsx';
import NavBar from '../../AdminPages/Components/NavigationBar/Navigation.jsx';

const AdminSignUp = () => {
    const [userName, setUserName] = useState("");
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [address, setAddress] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [passwordMatchError, setPasswordMatchError] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setPasswordMatchError(true);
            return; 
        }

        try {
            const response = await axios.post('http://localhost:8800/api/auth/register', {
                username: userName,
                email: email,
                password: password,
                fullName: fullName,
                address: address,
                isAdmin: false
            });
            console.log(response.data);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleImageUrlChange = (e) => {
        setImageUrl(e.target.value);
    };

    return (
        <div>
            <NavBar />
            <div className="signup-container">
                <div className="signup-left-section"/>
                <div className="signup-right-section">
                    <div className="signup-box">
                        <div className="signup-logo" />
                        <div className='signup-topic'>Register</div>
                        <div className="signup-input-container">
                            <input
                                type="text"
                                placeholder="FullName"
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                            />
                            <input
                                type="text"
                                placeholder="Address"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                            />
                            <input
                                type="text"
                                placeholder="Email/Phone (+94)"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <input
                                type="text"
                                placeholder="Username"
                                value={userName}
                                onChange={(e) => setUserName(e.target.value)}
                                required
                            />
                            <input
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            <input
                                type="password"
                                placeholder="Confirm Password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                            />
                            <input
                                type="text"
                                placeholder="Image URL"
                                value={imageUrl}
                                onChange={handleImageUrlChange}
                            />
                            {imageUrl && (
                                <div className="image-preview">
                                    <img src={imageUrl} alt="Preview" className="preview-img" />
                                </div>
                            )}
                            {passwordMatchError && <div className="password-error">Passwords do not match</div>}
                            <button className="signup-button" onClick={handleSubmit}>
                                <Link to="/login">Sign Up</Link>
                            </button>
                            <div className="signup-login-text">
                                Already have an account? 
                                <Link to="/Adminlogin" className="signup-login-link">Log In</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default AdminSignUp;
