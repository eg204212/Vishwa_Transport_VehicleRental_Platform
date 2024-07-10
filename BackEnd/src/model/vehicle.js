const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const vehicleSchema = new Schema({
    VehicleNum: {
        type: String,
        required: true
    },
    Type:{
        type: String,
        required: true
    },
    Model:{
        type: String,
        required: true
    },
    RegistrationNo:{
        type: String,
        required: true
    },
    Features:{
        type: String,
        required: true
    },
    PricePerDay:{
        type: String,
        required: true
    },
    image:{
        type:String,
        required:false,
    }
});

const vehicle = mongoose.model('vehicle', vehicleSchema);
module.exports = vehicle;
