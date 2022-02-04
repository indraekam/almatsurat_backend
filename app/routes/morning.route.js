const express = require('express');
const router = express.Router();

const controller = require('../controllers');

router.get("/morning", controller.morningController.getAll);

module.exports = router;