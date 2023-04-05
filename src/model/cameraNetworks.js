const db = require('../database');

module.exports = {
  async getAllCameraNetworks() {
    const [rows] = await db.query('SELECT * FROM camera_networks');
    return rows;
  },

  async getCameraNetwork(id) {
    const [rows] = await db.query('SELECT * FROM camera_networks WHERE id=?', [id]);
    return rows[0];
  },

  async createCameraNetwork(cameraNetwork) {
    const [result] = await db.query('INSERT INTO camera_networks SET ?', [cameraNetwork]);
    return result.insertId;
  },

  async updateCameraNetwork(id, updates) {
    const [result] = await db.query('UPDATE camera_networks SET ? WHERE id=?', [updates, id]);
    return result.affectedRows > 0;
  },

  async deleteCameraNetwork(id) {
    const [result] = await db.query('DELETE FROM camera_networks WHERE id=?', [id]);
    return result.affectedRows > 0;
  }
};
