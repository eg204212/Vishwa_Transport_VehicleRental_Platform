const express = require('express');
const router = express.Router();
const UserController = require('../controllers/user');

// User signup and login routes
router.post('/signup', UserController.UserSignup);
router.post('/login', UserController.UserLogin);
router.post('/resetpassword', UserController.ResetPassword);
router.get('/all', UserController.getAllUsers);

module.exports = router;
