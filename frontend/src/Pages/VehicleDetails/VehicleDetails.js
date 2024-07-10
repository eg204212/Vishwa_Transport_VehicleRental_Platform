import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './VehicleDetails.css';
import NavBar from '../../Components/NavBar/NavBar.js';
import axios from 'axios';

const VehicleDetails = () => {
  const [vehicles, setVehicles] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch vehicle details from the backend
    const fetchVehicles = async () => {
      try {
        const response = await axios.get('http://localhost:5001/api/v1/vehicle/all'); // Adjust URL as per your backend route
        setVehicles(response.data);
      } catch (error) {
        console.error('Error fetching vehicles:', error);
      }
    };

    fetchVehicles();
  }, []);

  const handleCardClick = (vehicleId) => {
    navigate(`/vehicle/${vehicleId}`);
  };

  return (
    <div>
      <NavBar />
      <div className='contetent1'> 
      <div className="attractive-text">
        <h1>Welcome to Our Vehicle Rental Service!</h1>
        <p>Find the best vehicles at unbeatable prices. Rent your dream vehicle today!</p>
      </div>
      <div className="vehicle-list">
        {vehicles.map((vehicle) => (
          <div key={vehicle._id} className="vehicle-card" onClick={() => handleCardClick(vehicle._id)}>
            <p><strong>Model:</strong> {vehicle.Model}</p>
            <p><strong>Type:</strong> {vehicle.Type}</p>
            <p><strong>Price Per Day:</strong> Rs. {vehicle.PricePerDay}</p>
            <img src={`http://localhost:5001${vehicle.image}`} alt="Vehicle" className="vehicle-image" />
          </div>
        ))}
      </div>
      </div>
        
    </div>
  );
};

export default VehicleDetails;