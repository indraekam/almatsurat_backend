const express = require('express');
const router = express.Router();

const controller = require('../controllers');

router.get("/night", controller.nightController.getAll);

module.exports = router;