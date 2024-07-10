import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css';
import Footer from '../../AdminPages/Components/Footer/Footer.jsx';
import NavigationBar from '../../AdminPages/Components/NavigationBar/Navigation.jsx';

const Login = () => {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");  // Clear any previous errors

        // Check for special admin credentials
        if (userName === "15520@Dave" && password === "rental*15520@vishwa") {
            navigate('/ManageVehicles');
            return;
        }

        try {
            const response = await axios.post('http://localhost:5001/api/v1/users/login', {
                UserName: userName,
                password: password
            });

            console.log(response.data);
            // Save the token to localStorage (or cookies)
            localStorage.setItem('token', response.data.token);
            navigate('/Vehicles_for_users');
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
            <div className="login-container">
                <div className="left-section-Login" />
                <div className="right-section">
                    <div className="login-box">
                        <div className="login-logo" alt="Logo" />
                        <div className="input-container">
                            <div className="Login-topic">Login</div>
                            <section>
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-5">
                                        <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>
                                        <input
                                            type="text"
                                            id="username"
                                            className="input-bar bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            placeholder="Username"
                                            value={userName}
                                            onChange={(e) => setUserName(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="mb-5">
                                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>
                                        <input
                                            type="password"
                                            id="password"
                                            className="input-bar bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            placeholder="Password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            required
                                        />
                                    </div>
                                    {error && <div className="error-message">{error}</div>}
                                    <button className="login-button" type="submit">Login</button>
                                </form>
                            </section>
                            <Link to="/forgotpassword" className="forgot-password">Forgot password?</Link>
                            <div className="signup-text">
                                Don't have an account? 
                            </div>
                            <Link to="/signup" className="signup-link">Sign Up</Link>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Login;
