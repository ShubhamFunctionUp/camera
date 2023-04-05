const express = require('express');
const router = express.Router();
const cameraController = require('../controller/camera');
const cameraNetworkController = require('../controller/cameraNetworks');

// Cameras
router.get('/', cameraController.getAllCamera)
router.get('/:id',cameraController.getSpecificCamera)
router.post('/',cameraController.addCamera)
router.put('/:id',cameraController.updateCamera)
router.delete('/:id',cameraController.deleteCamera)

module.exports = router;