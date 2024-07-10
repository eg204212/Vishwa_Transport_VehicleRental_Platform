require('dotenv').config();
const express = require('express')
const app = express()
const mongoose = require('mongoose');
const createHttpError = require('http-errors')
const bcrypt = require('bcrypt');
const UserModel = require('./model/user')
const UserRouter = require('./routes/user')
const StaffModel = require('./model/staff')
const StaffRouter = require('./routes/staff')
const vehicleRouter = require('./routes/vehicle');
const bookingRouter = require('./routes/booking')
const fileUpload = require('express-fileupload');
const ReviewRouter = require('./routes/reviews');

app.use(fileUpload());
app.use('/uploads/vehicle', express.static('public/vehicle'))

const cors = require('cors')
app.use(cors())

app.use(express.json())

app.use('/api/v1/users', UserRouter);
app.use('/api/v1/staff',StaffRouter);
app.use('/api/v1/vehicle', vehicleRouter);
app.use('/api/v1/booking',bookingRouter);
app.use('/reviews', ReviewRouter);

app.use((err, req, res, next) => {
    console.error(err.stack);
  
    if (createHttpError.isHttpError(err)) {
      res.status(err.status).json({ message: err.message });
    } else {
      res.status(500).json({ message: "Internal Server Error" });
    }
  });
  
module.exports = app;
