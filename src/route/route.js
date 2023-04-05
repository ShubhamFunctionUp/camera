const express = require('express');
const cameraController = require('../controller/camera');
const cameraNetworksController = require('../controller/cameraNetworks');

const router = express.Router();

// Camera routes
router.get('/cameras', cameraController.getAllCameras);
router.get('/cameras/:id', cameraController.getCamera);
router.post('/cameras', cameraController.createCamera);
router.put('/cameras/:id', cameraController.updateCamera);
router.delete('/cameras/:id', cameraController.deleteCamera);

// Camera networks routes
router.get('/networks', cameraNetworksController.getAllCameraNetworks);
router.get('/networks/:id', cameraNetworksController.getCameraNetwork);
router.post('/networks', cameraNetworksController.createCameraNetwork);
router.put('/networks/:id', cameraNetworksController.updateCameraNetwork);
router.delete('/networks/:id', cameraNetworksController.deleteCameraNetwork);

module.exports = router;
