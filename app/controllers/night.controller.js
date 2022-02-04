const db = require('../db/models');
const nightController = {};

nightController.getAll =  async function (req, res) {
    try {
        let result = await db.tb_night.findAll();
        if (result.length > 0) {
            res.status(200).json({
                message: 'Data ditampilkan',
                data: result
            })
        } else {
            res.status(200).json({
                message: 'Data kosong',
                data:result
            })
        }
    } catch (error) {
        res.status(404).json({
            message: error.message
        })
    }
}

module.exports = nightController;