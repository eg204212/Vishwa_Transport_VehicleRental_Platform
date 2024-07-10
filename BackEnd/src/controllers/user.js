const UserModel = require('../model/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const createError = require('http-errors');

exports.UserSignup = async (req, res, next) => {
  const { fullname, UserName, Address, email, MobileNO, password } = req.body;

  try {
      if (!fullname || !UserName || !Address || !email || !MobileNO || !password) {
          throw createError(400, 'Missing Required Parameters');
      }

      if (password.length < 8) {
          throw createError(400, 'Password must be at least 8 characters long');
      }

      const isUserAvailable = await UserModel.findOne({ email: email }).exec();

      if (isUserAvailable) {
          throw createError(400, 'User Already exists');
      }

      const hashPassword = await bcrypt.hash(password, 10);

      const user = new UserModel({
          fullname,
          email: email,
          password: hashPassword,
          UserName,
          Address,
          MobileNO,
      });

      const result = await user.save();
      res.status(201).send(result);
  } catch (error) {
      res.status(error.status || 500).json({ message: error.message });
  }
};



exports.UserLogin = async (req, res, next) => {
  const { UserName, password } = req.body;

  try {
      const user = await UserModel.findOne({ UserName }).exec();

      if (!user) {
          throw createError(404, 'User not found');
      }

      const isPasswordMatch = await bcrypt.compare(password, user.password);

      if (!isPasswordMatch) {
          throw createError(400, 'Invalid credentials');
      }

      const token = jwt.sign({ userId: user._id }, 'your_secret_key', { expiresIn: '1h' });

      res.status(200).json({ token });
  } catch (error) {
      next(error);
  }
};

exports.ResetPassword = async (req, res, next) => {
  const { UserName, newPassword, confirmPassword } = req.body;

  try {
      const user = await UserModel.findOne({ UserName }).exec();

      if (!user) {
          throw createError(404, 'User not found');
      }

      if (newPassword !== confirmPassword) {
          throw createError(400, 'New password and confirm password do not match');
      }

      const hashPassword = await bcrypt.hash(newPassword, 10);
      user.password = hashPassword;

      const result = await user.save();
      res.status(200).send({ message: 'Password updated successfully' });
  } catch (error) {
      next(error);
  }
};
exports.getAllUsers = async (req, res, next) => {
    try {
      const result = await UserModel.find().exec();
      res.status(200).send(result);
    } catch (error) {
      next(error);
    }
  };
  
