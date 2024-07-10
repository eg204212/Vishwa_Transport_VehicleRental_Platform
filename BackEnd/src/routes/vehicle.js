const express = require('express');
const router = express.Router();
const vehicleController = require('../controllers/vehicle');
const verifyToken = require('../middlewears/verifyToken')

router.post('/', vehicleController.vehicleCreate);
router.put('/:id', vehicleController.vehicleUpdate);
router.delete('/:id', vehicleController.vehicleDelete);
router.get('/search', vehicleController.searchVehicle);
router.get('/all', vehicleController.getAllVehicles);
router.get('/:id', vehicleController.getOneVehicle);

module.exports = router;
