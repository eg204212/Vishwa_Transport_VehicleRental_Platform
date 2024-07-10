import React from 'react';
import './Footer.css';
import car from './Images/car.png'; 
import star from './Images/star.png'; 
import strength from './Images/strength.png'; 
import contact from './Images/contact.png'; 
import facebook from './Images/facebook.png'; 
import email from './Images/email.png'; 
import phone from './Images/phone.png'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="services-bar">
        "Enjoy the efficient and specialized services of Vishwa Transport; Sri Lanka's leading rent-a-car company"
      </div>
      <div className="services">
        <div className="service">
          <img src={car} alt="Car" />
          <h3>Over 100 vehicles</h3>
          <p>Over 25 Vans,</p>
          <p>25 Cars,</p>
          <p>Double Cabs,</p>
          <p>Luxury Coaches,</p>
          <p>Lorries etc.</p>
        </div>
        <div className="service">
          <img src={star} alt="Insurance" />
          <h3>Insurance</h3>
          <p>Comprehensive Insurance available</p>
          <p>for all our vehicles.</p>
        </div>
        <div className="service">
          <img src={strength} alt="Our Strength" />
          <h3>Our Strength</h3>
          <p>24 hours service.</p>
        </div>
        <div className="service">
          <img src={contact} alt="Contact Us" />
          <h3>Contact Us</h3>
          <p>
            Vishwa Transport (Pvt) Ltd<br />
            No 123, Araliya Street, Gampaha, Sri Lanka.<br /><br />
            Hotlines:<br />
            <a href="tel:+94777845830" class="light-blue-link">+94 777 845 830</a><br /><br />
            Email:<br />
            <a href="mailto:shanthasovis73@gmail.com" class="light-blue-link">shanthasovis73@gmail.com</a>
            </p>
        </div>
      </div>
      <div className="find-out">
        <hr />
        <a href="/about" class="blue-link">Find out more about us</a>

        <hr />
      </div>
      <div className="contact-bar">
        <p>You have any questions or need additional information?</p>
        <button className="contact-btn"><img src={facebook} alt="Facebook" /></button>
        <button className="contact-btn"><img src={email} alt="Email" /></button>
        <button className="contact-btn"><img src={phone} alt="Phone" /></button>
      </div>
    </footer>
  );
}

export default Footer;
