const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  vehicleId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Vehicle'
  },
  fullname: {
    type: String,
    required: true
  },
  MobileNO: {
    type: String,
    required: true
  },
  Address: {
    type: String,
    required: true
  },
  LicenseNo: {
    type: String,
    required: true
  },
  PickupDate: {
    type: Date,
    required: true
  },
  PickupTime: {
    type: String,
    required: true
  },
  DropoffDate: {
    type: Date,
    required: true
  },
  DropoffTime: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Booking', bookingSchema);
