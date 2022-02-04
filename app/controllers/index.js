const morningController = require('./morning.controller');
const nightController = require('./night.controller');
const controller = {};

controller.morningController = morningController;
controller.nightController = nightController;


module.exports = controller;