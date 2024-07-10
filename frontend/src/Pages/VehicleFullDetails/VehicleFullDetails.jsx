import React, { useState, useEffect } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import './VehicleFullDetails.css';
import NavBar from '../../Components/NavBar/NavBar.js';
import axios from 'axios';

const VehicleFullDetails = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [vehicle, setVehicle] = useState(null);
  const [bookingDetails, setBookingDetails] = useState(location.state?.bookingDetails || []);

  useEffect(() => {
    const fetchVehicle = async () => {
      try {
        const vehicleResponse = await axios.get(`http://localhost:5001/api/v1/vehicle/${id}`);
        setVehicle(vehicleResponse.data);

        if (!bookingDetails.length) {
          const bookingResponse = await axios.get(`http://localhost:5001/api/v1/booking?vehicleId=${id}`);
          const bookings = bookingResponse.data;

          // Filter out expired bookings
          const filteredBookings = bookings.filter(booking => {
            // Assuming DropoffDate is in UTC format from backend
            const dropoffDate = new Date(booking.DropoffDate);
            const currentDate = new Date();
            return dropoffDate >= currentDate; // Only keep bookings with DropoffDate in the future or today
          });

          setBookingDetails(filteredBookings);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchVehicle();
  }, [id, bookingDetails]);

  if (!vehicle) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <NavBar />
      <div className='content_vehicle'>
        <h2 className='h2-heading'>Vehicle Full Details</h2>
        <div className="vehicle-details-container">
          <div className="vehicle-image-container">
            <img src={`http://localhost:5001${vehicle.image}`} alt="Vehicle" className="vehicle-image" />
          </div>
          <div className="vehicle-details">
            <div className="feature-box">
              <h3>Explore the Ultimate Ride</h3>
              <p>Discover our premium collection of vehicles. Whether it's for a weekend getaway or a special occasion, find the perfect match for your journey.</p>
            </div>
            <p><strong>Vehicle Number:</strong> {vehicle.VehicleNum}</p>
            <p><strong>Type:</strong> {vehicle.Type}</p>
            <p><strong>Model:</strong> {vehicle.Model}</p>
            <p><strong>Registration Number:</strong> {vehicle.RegistrationNo}</p>
            <p><strong>Availability:</strong> {vehicle.Availability}</p>
            <p><strong>Features:</strong> {vehicle.Features}</p>
            <p><strong>Price Per Day:</strong> Rs. {vehicle.PricePerDay}</p>
          </div>
        </div>

        {bookingDetails.length > 0 && (
          <div className="booking-details">
            <table>
              <thead>
                <tr>
                  <th>Pickup Date</th>
                  <th>Pickup Time</th>
                  <th>Dropoff Date</th>
                  <th>Dropoff Time</th>
                </tr>
              </thead>
              <tbody>
                {bookingDetails.map((booking, index) => (
                  <tr key={index}>
                    <td>{booking.PickupDate}</td>
                    <td>{booking.PickupTime}</td>
                    <td>{booking.DropoffDate}</td>
                    <td>{booking.DropoffTime}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        <div className="action-buttons">
          <button onClick={() => alert('Added to Cart')}>Add to Cart</button>
          <button onClick={() => navigate(`/booking/${id}`)}>Book</button>
        </div>
      </div>
    </div>
  );
};

export default VehicleFullDetails;
