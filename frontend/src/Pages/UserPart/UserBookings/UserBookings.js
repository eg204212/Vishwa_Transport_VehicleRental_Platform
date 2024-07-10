import React, { useState } from 'react';
import './UserBookings.css';
import UserDashboard from '../../../Components/UserDashboard/UserDashboard.js';
import Footer from '../../../AdminPages/Components/Footer/Footer.jsx';

const Booking = () => {
    const [vehicles, setVehicles] = useState([
        { id: 1, name: 'Vehicle 1', status: 'Booked' },
        { id: 2, name: 'Vehicle 2', status: 'Available' },
        { id: 3, name: 'Vehicle 3', status: 'Booked' },
    ]);

    const handleAdd = () => {
        const newVehicle = { id: vehicles.length + 1, name: `Vehicle ${vehicles.length + 1}`, status: 'Available' };
        setVehicles([...vehicles, newVehicle]);
    };

    const handleRemove = (id) => {
        setVehicles(vehicles.filter(vehicle => vehicle.id !== id));
    };

    return (
        <div>
        <UserDashboard />
        <div className="booking-container">
            
            <div className="booking-content">
                <h2>Booking Page</h2>
                <table className="booking-table">
                    <thead>
                        <tr>
                            <th>Vehicle</th>
                            <th>Booking Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {vehicles.map(vehicle => (
                            <tr key={vehicle.id}>
                                <td>{vehicle.name}</td>
                                <td>{vehicle.status}</td>
                                <td>
                                    {vehicle.status === 'Available' &&
                                        <button onClick={() => handleRemove(vehicle.id)}>Remove</button>
                                    }
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="add-remove-buttons">
                    <button onClick={handleAdd}>Add Vehicle</button>
                    <button disabled={vehicles.length === 0}>Remove Vehicle</button>
                </div>
            </div>
        </div>
        <Footer/>
        </div>
    );
};

export default Booking;
