const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const StaffSchema = new Schema({
    fullname: {
        type: String,
        required: true
    },
    userName: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    mobileNO: {
        type: Number,
        required: true
    },
    employeeID: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

const Staff = mongoose.model('Staff', StaffSchema);

module.exports = Staff;
