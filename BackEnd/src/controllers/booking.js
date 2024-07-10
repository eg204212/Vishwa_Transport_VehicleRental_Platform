const mongoose = require('mongoose');
const Booking = require('../model/booking');

// Add a new booking
const addBooking = async (req, res) => {
  try {
    const { fullname, MobileNO, Address, LicenseNo, PickupDate, DropoffDate, PickupTime, DropoffTime, vehicleId } = req.body;
    const newBooking = new Booking({
      fullname,
      MobileNO,
      Address,
      LicenseNo,
      PickupDate,
      DropoffDate,
      PickupTime,
      DropoffTime,
      vehicleId
    });
    await newBooking.save();
    res.status(201).json({ message: 'Booking added successfully', booking: newBooking });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Get bookings by vehicle ID
const getBookings = async (req, res) => {
  try {
    const { vehicleId } = req.query;
    let query = {};
    if (vehicleId) {
      query = { vehicleId };
    }
    const bookings = await Booking.find(query);
    res.status(200).json(bookings);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = { addBooking, getBookings };
