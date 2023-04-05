const connection = require('../database');

module.exports = {
  async getAllCameras() {
    try {
      const query = 'SELECT * FROM Cameras';
      const [rows, fields] = await connection.query(query);
      return rows;
    } catch (error) {
      throw new Error(`Error fetching cameras: ${error}`);
    }
  },

  async getCamera(id) {
    try {
      const query = 'SELECT * FROM Cameras WHERE id = ?';
      const [rows, fields] = await connection.query(query, [id]);
      return rows[0];
    } catch (error) {
      throw new Error(`Error fetching camera with id ${id}: ${error}`);
    }
  },

  async createCamera(camera) {
    try {
      const query = 'INSERT INTO Cameras SET ?';
      const [result] = await connection.query(query, [camera]);
      return result.insertId;
    } catch (error) {
      throw new Error(`Error creating camera: ${error}`);
    }
  },

  async updateCamera(id, updates) {
    try {
      const query = 'UPDATE Cameras SET ? WHERE id = ?';
      const [result] = await connection.query(query, [updates, id]);
      return result.affectedRows > 0;
    } catch (error) {
      throw new Error(`Error updating camera with id ${id}: ${error}`);
    }
  },

  async deleteCamera(id) {
    try {
      const query = 'DELETE FROM Cameras WHERE id = ?';
      const [result] = await connection.query(query, [id]);
      return result.affectedRows > 0;
    } catch (error) {
      throw new Error(`Error deleting camera with id ${id}: ${error}`);
    }
  }
};
