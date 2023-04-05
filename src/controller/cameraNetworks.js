const CameraNetworks = require('../model/cameraNetworks');

module.exports = {
  async getAllCameraNetworks(req, res) {
    try {
      const cameraNetworks = await CameraNetworks.getAllCameraNetworks();
      res.status(200).json(cameraNetworks);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async getCameraNetwork(req, res) {
    const id = req.params.id;
    try {
      const cameraNetwork = await CameraNetworks.getCameraNetwork(id);
      if (cameraNetwork) {
        res.status(200).json(cameraNetwork);
      } else {
        res.status(404).json({ error: 'Camera network not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async createCameraNetwork(req, res) {
    const cameraNetwork = req.body;
    try {
      const newId = await CameraNetworks.createCameraNetwork(cameraNetwork);
      res.status(201).json({ id: newId });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async updateCameraNetwork(req, res) {
    const id = req.params.id;
    const updates = req.body;
    try {
      const success = await CameraNetworks.updateCameraNetwork(id, updates);
      if (success) {
        res.status(200).json({ message: 'Camera network updated successfully' });
      } else {
        res.status(404).json({ error: 'Camera network not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async deleteCameraNetwork(req, res) {
    const id = req.params.id;
    try {
      const success = await CameraNetworks.deleteCameraNetwork(id);
      if (success) {
        res.status(200).json({ message: 'Camera network deleted successfully' });
      } else {
        res.status(404).json({ error: 'Camera network not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};
