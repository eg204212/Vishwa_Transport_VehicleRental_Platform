const express = require('express');
const router = express.Router();
const StaffController = require('../controllers/staff');

router.post('/signup', StaffController.StaffSignup);
router.post('/login', StaffController.StaffLogin);
router.post('/forgotpassword', StaffController.ForgotPassword);

router.get('/', StaffController.getAllStaff);

module.exports = router;
