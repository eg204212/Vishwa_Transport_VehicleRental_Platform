import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './SignUp.css';
import Footer from '../../AdminPages/Components/Footer/Footer.jsx';

const SignUp = () => {
    const [fullName, setFullName] = useState("");
    const [userName, setUserName] = useState("");
    const [address, setAddress] = useState("");
    const [email, setemail] = useState("");
    const [mobileNo, setMobileNo] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(""); // Clear any previous errors

        try {
            const response = await axios.post('http://localhost:5001/api/v1/users/signup', {
                fullname: fullName,
                UserName: userName,
                Address: address,
                email: email,
                MobileNO: mobileNo,
                password: password
            });

            console.log(response.data);
            navigate('/login');
        } catch (error) {
            console.error('Error:', error);
            if (error.response && error.response.data && error.response.data.message) {
                setError(error.response.data.message);
            } else {
                setError('An error occurred. Please try again.');
            }
        }
    };

    return (
        <div>
            <div className="signup-container">
                <div className="signup-left-section" />
                <div className="signup-right-section">
                    <div className="signup-box">
                        <div className="signup-logo" />
                        <div className='signup-topic'>Register</div>
                        <div className="signup-input-container">
                            <input
                                type="text"
                                placeholder="Full Name"
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                                required
                            />
                            <input
                                type="text"
                                placeholder="Address"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                required
                            />
                            <input
                                type="email"
                                placeholder="email"
                                value={email}
                                onChange={(e) => setemail(e.target.value)}
                                required
                            />
                            <input
                                type="text"
                                placeholder="Mobile No"
                                value={mobileNo}
                                onChange={(e) => setMobileNo(e.target.value)}
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
                            {error && <div className="error-message">{error}</div>}
                            <button className="signup-button" onClick={handleSubmit}>
                                Sign Up
                            </button>
                            <div className="signup-login-text">
                                Already have an account? 
                                <Link to="/login" className="signup-login-link">Log In</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default SignUp;
