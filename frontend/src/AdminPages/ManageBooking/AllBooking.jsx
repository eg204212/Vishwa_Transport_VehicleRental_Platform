import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AllBooking.css';
import NavBar from '../../AdminPages/Components/NavigationBar/Navigation.jsx';

const AllBooking = () => {
  const [vehicleBookings, setVehicleBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await axios.get('http://localhost:5001/api/v1/booking');
        const bookings = response.data;

        // Filter out expired bookings
        const filteredBookings = bookings.filter(booking => {
          // Assuming DropoffDate is in UTC format from backend
          const dropoffDate = new Date(booking.DropoffDate);
          const currentDate = new Date();
          return dropoffDate >= currentDate; // Only keep bookings with DropoffDate in the future or today
        });

        // Group bookings by vehicleId
        const bookingsByVehicle = filteredBookings.reduce((acc, booking) => {
          if (!acc[booking.vehicleId]) {
            acc[booking.vehicleId] = [];
          }
          acc[booking.vehicleId].push(booking);
          return acc;
        }, {});

        // Fetch vehicle details for each group of bookings
        const vehicleBookingDetails = await Promise.all(
          Object.keys(bookingsByVehicle).map(async (vehicleId) => {
            try {
              const vehicleResponse = await axios.get(`http://localhost:5001/api/v1/vehicle/${vehicleId}`);
              return {
                vehicle: vehicleResponse.data,
                bookings: bookingsByVehicle[vehicleId],
              };
            } catch (error) {
              console.error(`Error fetching vehicle details for vehicleId ${vehicleId}:`, error);
              return {
                vehicle: null,
                bookings: bookingsByVehicle[vehicleId],
              };
            }
          })
        );

        setVehicleBookings(vehicleBookingDetails);
      } catch (error) {
        console.error('Error fetching bookings:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

  const handleSearch = () => {
    // Logic for search can be implemented if needed
  };

  const resetSearch = () => {
    setSearchTerm('');
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <NavBar />
      <div className="all-booking-container">
        <div className="search-container">
          <input
            type="text"
            placeholder="Search by Vehicle Number"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
          <button onClick={resetSearch}>Reset</button>
        </div>
        <div className="booking-list">
          {vehicleBookings
            .filter(vehicleBooking => 
              vehicleBooking.vehicle && 
              vehicleBooking.vehicle.VehicleNum.includes(searchTerm))
            .map((vehicleBooking, index) => (
              <div key={index} className="vehicle-booking-item">
                {vehicleBooking.vehicle ? (
                  <div className="vehicle-details">
                    <img src={`http://localhost:5001${vehicleBooking.vehicle.image}`} alt="Vehicle" />
                    <p><strong>Vehicle Number:</strong> {vehicleBooking.vehicle.VehicleNum}</p>
                    <p><strong>Type:</strong> {vehicleBooking.vehicle.Type}</p>
                  </div>
                ) : (
                  <p>No vehicle details available</p>
                )}
                <div className="booking-table-container">
                  <table className="booking-table">
                    <thead>
                      <tr>
                        <th>Full Name</th>
                        <th>Mobile Number</th>
                        <th>Address</th>
                        <th>License Number</th>
                        <th>Pickup Date</th>
                        <th>Pickup Time</th>
                        <th>Dropoff Date</th>
                        <th>Dropoff Time</th>
                      </tr>
                    </thead>
                    <tbody>
                      {vehicleBooking.bookings.map((booking, index) => (
                        <tr key={index}>
                          <td>{booking.fullname}</td>
                          <td>{booking.MobileNO}</td>
                          <td>{booking.Address}</td>
                          <td>{booking.LicenseNo}</td>
                          <td>{booking.PickupDate}</td>
                          <td>{booking.PickupTime}</td>
                          <td>{booking.DropoffDate}</td>
                          <td>{booking.DropoffTime}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default AllBooking;
