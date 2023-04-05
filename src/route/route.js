const express = require('express');
const router = express.Router();
const cameraController = require('../controller/camera');
const cameraNetworkController = require('../controller/cameraNetworks');

// Cameras
router.get('/getAllCamera', cameraController.getAllCamera)
router.get('/getCamera/:id',cameraController.getSpecificCamera)
router.post('/addCamera',cameraController.addCamera)
router.put('/camera/:id',cameraController.updateCamera)
router.delete('/camera/:id',cameraController.deleteCamera)

router.get('/getAllCameraNetwork', cameraNetworkController.getAllCameraNetworks)
router.get('/getCameraNetwork/:id',cameraNetworkController.getCameraNetworkById)
router.post('/addCameraNetwork',cameraNetworkController.addCameraNetwork)
router.put('/cameraNetwork/:id',cameraNetworkController.updateCameraNetwork)
router.delete('/cameraNetwork/:id',cameraNetworkController.deleteCameraNetwork)

module.exports = router;