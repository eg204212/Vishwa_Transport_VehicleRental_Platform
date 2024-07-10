import React, { useState } from 'react';
import './ForgotPW.css';
import NavBar from '../../AdminPages/Components/NavigationBar/Navigation.jsx';
import Footer from '../../AdminPages/Components/Footer/Footer.jsx';

const ForgotPW = () => {
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const handleNewPasswordChange = (e) => {
        setNewPassword(e.target.value);
        setError('');
    };

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
        setError('');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newPassword !== confirmPassword) {
            setError('Passwords do not match');
        } else {
            console.log('Passwords match');
        }
    };

    return (
        <div classname="background11">
            <NavBar />
            <div className="reset-password-container">
                <div className="left-section-fogotpw" />
                <div className="right-section">
                    <i alt="Logo" className="reset-password-logo" />
                    <div className="input-container">
                        <div className='ResetPassword-topic'>Reset Password</div>
                        <input
                            classNametype="text"
                            placeholder="User Name"
                        />
                        <input
                            type="password"
                            placeholder="New Password"
                            value={newPassword}
                            onChange={handleNewPasswordChange}
                        />
                        <input
                            type="password"
                            placeholder="Confirm Password"
                            value={confirmPassword}
                            onChange={handleConfirmPasswordChange}
                        />
                        {error && <div className="error-message">{error}</div>}
                        <button
                            className="reset-password-button"
                            onClick={handleSubmit}
                        >
                            Reset Password
                        </button>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default ForgotPW;
