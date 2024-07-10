import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import Footer from '../../AdminPages/Components/Footer/Footer.jsx';
import NavigationBar from '../../AdminPages/Components/NavigationBar/Navigation.jsx';

const AdminLogin = () => {
    return (
        <div>
            <NavigationBar />
            <div className="login-container">
                <div className="left-section-Login" />
                <div className="right-section">
                    <div className="login-box">
                        <div className="login-logo" alt="Logo" />
                        <div className="input-container">
                            <div className="Login-topic">Login</div>
                            <section>
                                <form>
                                    <div className="mb-5">
                                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>
                                        <input type="email" id="email" className="input-bar bg-gray-50 border border-gray-300 
                                        text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
                                        dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                        placeholder="Username" required />
                                    </div>
                                    <div className="mb-5">
                                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>
                                        <input type="password" id="password" className="input-bar bg-gray-50 border border-gray-300 text-gray-900 
                                        text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark
                                        :border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                        placeholder="Password" required />
                                    </div>
                                </form>
                            </section>
                            <Link to="/fogotpassword" className="forgot-password">Forgot password?</Link>
                            <Link to="/AdminProfile" className="login-button">Login</Link>
                            <div className="signup-text">
                                Don't have an account? 
                            </div>
                            <Link to="/AdminSignup" className="signup-link">Sign Up</Link>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default AdminLogin;
