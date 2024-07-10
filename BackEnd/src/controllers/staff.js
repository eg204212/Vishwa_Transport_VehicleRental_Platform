const StaffModel = require('../model/staff');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const createError = require('http-errors');

exports.StaffSignup = async (req, res, next) => {
  const { fullname, userName, address, email, mobileNO, employeeID, password } = req.body;

  try {
    if (!fullname || !userName || !address || !email || !mobileNO || !employeeID || !password) {
      throw createError(400, 'Missing Required Parameters');
    }

    const isStaffAvailable = await StaffModel.findOne({ email }).exec();

    if (isStaffAvailable) {
      throw createError(400, 'Staff Already Exists');
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const staff = new StaffModel({
      fullname,
      userName,
      address,
      email,
      mobileNO,
      employeeID,
      password: hashPassword,
    });

    const result = await staff.save();
    res.status(201).send(result);
  } catch (error) {
    next(error);
  }
};

exports.StaffLogin = async (req, res, next) => {
  const { userName, password } = req.body;

  try {
    console.log('Login request received for username:', userName);

    const staff = await StaffModel.findOne({ userName }).exec();
    console.log('Staff found in database:', staff);

    if (!staff) {
      throw createError(404, 'Staff not found');
    }

    const isPasswordMatch = await bcrypt.compare(password, staff.password);

    if (!isPasswordMatch) {
      throw createError(400, 'Invalid credentials');
    }

    const token = jwt.sign({ staffId: staff._id }, 'your_secret_key_here', { expiresIn: '1h' });

    // Return staff details along with the token
    res.status(200).json({ message: 'Login successful', staff, token });
  } catch (error) {
    next(error);
  }
};


exports.ForgotPassword = async (req, res, next) => {
  const { userName, newPassword, confirmPassword } = req.body;

  try {
    const staff = await StaffModel.findOne({ userName }).exec();

    if (!staff) {
      throw createError(404, 'Staff not found');
    }

    if (newPassword !== confirmPassword) {
      throw createError(400, 'New password and confirm password do not match');
    }

    const hashPassword = await bcrypt.hash(newPassword, 10);
    staff.password = hashPassword;

    const result = await staff.save();
    res.status(200).send({ message: 'Password updated successfully' });
  } catch (error) {
    next(error);
  }
};


exports.getAllStaff = async (req, res, next) => {
  try {
    const staffList = await StaffModel.find().select('-password');
    res.status(200).json(staffList);
  } catch (error) {
    next(error);
  }
};