import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import Login from './Pages/Login/Login';
import SignUp from './Pages/SignUp/SignUp';
import UserBookings from './Pages/UserPart/UserBookings/UserBookings';
import ForgotPW from './Pages/FogotPW/ForgotPW';
import VehicleDetails from './Pages/VehicleDetails/VehicleDetails';
import VehicleFullDetails from './Pages/VehicleFullDetails/VehicleFullDetails';
import Home from './Pages/Home/Home';
import AdminProfile from './AdminPages/AdminProfile/AdminProfile';
import PostVehicle from './AdminPages/PostVehicle/PostVehicle';
import ManageVehicles from './AdminPages/ManageVehicles/ManageVehicles';
import AllBooking from './AdminPages/ManageBooking/AllBooking';
import BookingDetails from './Pages/BookingDetails/BookingDetails'; 
import RegisterUsers from './AdminPages/RegisteredUsers/RegisterUsers';
import ReviewAndRating from './AdminPages/Booking/Booking';
import BookingPage from './AdminPages/Booking/Booking';
import ReviewRatings from './AdminPages/ReviewRatings/ReviewRatings';
import ReviewsPage from './Pages/ReviewPage/ReviewPage';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/fogotpassword" element={<ForgotPW />} />
          <Route path="/UserBookings" element={<UserBookings />} />
          <Route path="/Vehicles_for_users" element={<VehicleDetails />} />
          <Route path="/Vehiclesfulldetails" element={<VehicleFullDetails />} />
          <Route path="/vehicle/:id" element={<VehicleFullDetails />} />
          <Route path="/AdminProfile" element={<AdminProfile />} />
          <Route path="/PostVehicle" element={<PostVehicle />} />
          <Route path="/ManageVehicles" element={<ManageVehicles />} />
          <Route path="/AllBooking" element={<AllBooking />} />
          <Route path="/BookingDetails" element={<BookingDetails />} />
          <Route path="/RegisteredUsers" element={<RegisterUsers />} />
          
          <Route path="/Booking" element={<BookingPage />} />
          <Route path="/ReviewPage" element={<ReviewsPage/>} />
          <Route path="/booking/:id" element={<BookingDetails />} /> {/* Add this route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
