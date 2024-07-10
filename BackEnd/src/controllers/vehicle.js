const vehicleModel = require('../model/vehicle');
const createHttpError = require('http-errors');
const mongoose = require('mongoose');


exports.vehicleCreate = async (req, res, next) => {
  const {
    VehicleNum,
    Type,
    Model,
    RegistrationNo,
    Features,
    PricePerDay
  } = req.body;

  try {
    if (!req.files || !req.files.image) {
      throw createHttpError(400, "Image file is missing");
    }

    const { image } = req.files;

    if (!image.mimetype.startsWith('image')) {
      throw createHttpError(400, 'Only images are allowed');
    }

    // Move image to server folder (public/vehicle)
    const filepath = __dirname + '/../../public/vehicle/' + image.name;
    image.mv(filepath);

    // Create file path for DB storage
    const filepathtoUpload = '/uploads/vehicle/' + image.name;

    // Validate other required fields
    if (!VehicleNum || !Model || !RegistrationNo || !Features || !PricePerDay) {
      throw createHttpError(400, 'Please add all the required details');
    }

    // Create new vehicle instance
    const vehicle = new vehicleModel({
      VehicleNum,
      Type,
      Model,
      RegistrationNo,
      Features,
      PricePerDay,
      image: filepathtoUpload
    });

    // Save vehicle to database
    const result = await vehicle.save();
    res.status(201).json(result); // Respond with JSON of the saved vehicle
  } catch (error) {
    next(error); // Pass error to Express error handler
  }
};


exports.vehicleUpdate = async (req, res, next) => {
  const vehicleId = req.params.id;
  const {
    VehicleNum,
    Type,
    Model,
    RegistrationNo,
    Features,
    PricePerDay
  } = req.body;

  try {
    if (!mongoose.isValidObjectId(vehicleId)) {
      throw createHttpError(400, "Invalid Id");
    }

    if (!VehicleNum || !Model || !RegistrationNo || !Features || !PricePerDay) {
      throw createHttpError(400, 'Please add all the required Details');
    }

    const vehicle = await vehicleModel.findById(vehicleId).exec();

    if (!vehicle) {
      throw createHttpError(404, 'Vehicle not found');
    }

    vehicle.VehicleNum = VehicleNum;
    vehicle.Type = Type;
    vehicle.Model = Model;
    vehicle.RegistrationNo = RegistrationNo;
    vehicle.Features = Features;
    vehicle.PricePerDay = PricePerDay;

    const result = await vehicle.save();
    res.status(200).send(result);
  } catch (error) {
    next(error);
  }
};

exports.vehicleDelete = async (req, res, next) => {
  const vehicleId = req.params.id;

  try {
    if (!mongoose.isValidObjectId(vehicleId)) {
      throw createHttpError(400, "Invalid Id");
    }

    const vehicle = await vehicleModel.findByIdAndDelete(vehicleId).exec();

    if (!vehicle) {
      throw createHttpError(404, 'Vehicle not found');
    }

    res.status(200).send(vehicle);
  } catch (error) {
    next(error);
  }
};

exports.getAllVehicles = async (req, res, next) => {
  try {
    const result = await vehicleModel.find().exec();
    res.status(200).send(result);
  } catch (error) {
    next(error);
  }
};

exports.getOneVehicle = async (req, res, next) => {
  const vehicleId = req.params.id;

  try {
    if (!mongoose.isValidObjectId(vehicleId)) {
      throw createHttpError(400, "Invalid Id");
    }

    const result = await vehicleModel.findById(vehicleId).exec();

    if (!result) {
      throw createHttpError(404, 'Vehicle not found');
    }

    res.status(200).send(result);
  } catch (error) {
    next(error);
  }
};

exports.searchVehicle = async (req, res, next) => {
  const query = req.query.vehicleNum; // Fetch vehicleNum from query parameters

  try {
    if (!query) {
      throw createHttpError(400, "Please provide a vehicleNum query");
    }

    const result = await vehicleModel.find({ VehicleNum: { $regex: query, $options: 'i' } }).exec();

    if (!result || result.length === 0) {
      throw createHttpError(404, 'Vehicle not found');
    }

    res.status(200).send(result);
  } catch (error) {
    next(error);
  }
};

