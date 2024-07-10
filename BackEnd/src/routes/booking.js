const express = require('express');
const router = express.Router();
const { addBooking, getBookings } = require('../controllers/booking');

router.post('/', addBooking); // POST route for creating a booking
router.get('/', getBookings); // GET route for fetching all bookings

module.exports = router;
