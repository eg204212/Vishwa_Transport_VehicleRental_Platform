import React, { useState, useEffect } from 'react';
import './ManageVehicles.css';
import axios from 'axios';
import NavigationBar from '../Components/NavigationBar/Navigation.jsx';

const ManageVehicles = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [vehicles, setVehicles] = useState([]);
  const [editVehicleId, setEditVehicleId] = useState(null);
  const [editVehicleData, setEditVehicleData] = useState({
    VehicleNum: '',
    Type: '',
    Model: '',
    RegistrationNo: '',
    Availability: '',
    Features: '',
    PricePerDay: ''
  });

  useEffect(() => {
    fetchVehicles(); // Fetch all vehicles initially
  }, []);

  const fetchVehicles = async () => {
    try {
      const response = await axios.get('http://localhost:5001/api/v1/vehicle/all');
      setVehicles(response.data); // Update state with all vehicles
    } catch (error) {
      console.error('Error fetching vehicles:', error);
    }
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchByNum = async () => {
    try {
      const response = await axios.get(`http://localhost:5001/api/v1/vehicle/search`, {
        params: { vehicleNum: searchQuery }
      });
      setVehicles(response.data); // Update state with the searched vehicles
    } catch (error) {
      console.error('Error searching vehicle by VehicleNum:', error);
      // Handle error (e.g., show error message to the user)
    }
  };

  const handleEdit = (vehicle) => {
    setEditVehicleId(vehicle._id);
    setEditVehicleData({
      VehicleNum: vehicle.VehicleNum,
      Type: vehicle.Type,
      Model: vehicle.Model,
      RegistrationNo: vehicle.RegistrationNo,
      Availability: vehicle.Availability,
      Features: vehicle.Features,
      PricePerDay: vehicle.PricePerDay
    });
  };

  const handleSave = async () => {
    try {
      const response = await axios.put(`http://localhost:5001/api/v1/vehicle/${editVehicleId}`, editVehicleData);
      setVehicles(vehicles.map(v => (v._id === editVehicleId ? response.data : v)));
      setEditVehicleId(null);
    } catch (error) {
      console.error('Error updating vehicle:', error);
    }
  };

  const handleRemove = async (vehicleId) => {
    try {
      await axios.delete(`http://localhost:5001/api/v1/vehicle/${vehicleId}`);
      setVehicles(vehicles.filter(vehicle => vehicle._id !== vehicleId));
    } catch (error) {
      console.error('Error deleting vehicle:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditVehicleData({ ...editVehicleData, [name]: value });
  };

  const resetSearch = async () => {
    setSearchQuery('');
    await fetchVehicles(); // Fetch all vehicles again after resetting search
  };

  return (
    <div>
      <NavigationBar />
      <div className="manage-vehicles-page">
        <div className="search-container">
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search by Vehicle Number..."
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <button onClick={handleSearchByNum}>Search</button>
            <button onClick={resetSearch}>Reset</button>
          </div>
        </div>
        <div className="vehicle-boxes">
          {/* Display vehicles */}
          {vehicles.map(vehicle => (
            <div className="vehicle-box1" key={vehicle._id}>
              {/* Vehicle details */}
              <img src={`http://localhost:5001${vehicle.image}`} alt={vehicle.VehicleNum} />
              <div className="vehicle-details">
                {editVehicleId === vehicle._id ? (
                  <div className="edit-vehicle-form">
                    {['VehicleNum', 'Type', 'Model', 'RegistrationNo', 'Features', 'PricePerDay'].map(field => (
                      <label key={field}>
                        {field.replace(/([A-Z])/g, ' $1')}:
                        <input
                          type="text"
                          name={field}
                          value={editVehicleData[field]}
                          onChange={handleChange}
                          placeholder={field}
                        />
                      </label>
                    ))}
                    <div className="form-actions">
                      <button onClick={handleSave}>Save</button>
                      <button onClick={() => setEditVehicleId(null)}>Cancel</button>
                    </div>
                  </div>
                ) : (
                  <>
                    <p><strong>Vehicle Number:</strong> {vehicle.VehicleNum}</p>
                    <p><strong>Type:</strong> {vehicle.Type}</p>
                    <p><strong>Model:</strong> {vehicle.Model}</p>
                    <p><strong>Registration No:</strong> {vehicle.RegistrationNo}</p>
                    <p><strong>Features:</strong> {vehicle.Features}</p>
                    <p><strong>Price Per Day:</strong> Rs. {vehicle.PricePerDay}</p>
                  </>
                )}
              </div>
              <div className="vehicle-actions">
                <button onClick={() => handleEdit(vehicle)}>Edit</button>
                <button onClick={() => handleRemove(vehicle._id)}>Remove</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ManageVehicles;
