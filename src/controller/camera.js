const express = require('express');
const cameraModel = require('../model/camera');
const cameraNetwork = require("../model/cameraNetworks")

module.exports = {
  async getAllCameras(req, res, next) {
    try {
      const cameras = await cameraModel.getAllCameras();
      res.json(cameras);
    } catch (error) {
      next(error);
    }
  },

  async getCamera(req, res, next) {
    const { id } = req.params;
    try {
      const camera = await cameraModel.getCamera(id);
      if (camera) {
        res.json(camera);
      } else {
        res.sendStatus(404);
      }
    } catch (error) {
      next(error);
    }
  },

  async createCamera(req, res, next) {
    const { name, description, url } = req.body;
    const camera = { name, description, url };
    try {
      const cameraId = await cameraModel.createCamera(camera);
      res.status(201).json({ id: cameraId, ...camera });
    } catch (error) {
      next(error);
    }
  },

  async updateCamera(req, res, next) {
    const { id } = req.params;
    const updates = req.body;
    try {
      const result = await cameraModel.updateCamera(id, updates);
      if (result) {
        res.sendStatus(204);
      } else {
        res.sendStatus(404);
      }
    } catch (error) {
      next(error);
    }
  },

  async deleteCamera(req, res, next) {
    const { id } = req.params;
    try {
      const result = await cameraModel.deleteCamera(id);
      if (result) {
        res.sendStatus(204);
      } else {
        res.sendStatus(404);
      }
    } catch (error) {
      next(error);
    }
  }
};
