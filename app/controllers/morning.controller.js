
const db = require("../db/models");
const morningController = {};

morningController.getAll = async function(req, res) {
    try {
        let result = await db.tb_morning.findAll();
        if (result.length > 0) {
          res.status(200).json({
            message: "data ditampilkan",
            data: result,
          });
        } else {
          res.status(200).json({
            message: "data kosong",
            data: result,
          });
        }
      } catch (error) {
        res.status(404).json({
          message: error.message,
        });
      }
}

module.exports = morningController;