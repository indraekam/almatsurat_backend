const {Router} = require('express');
const router = Router();

const morningRoute = require('./morning.route');
const nightRoute = require('./night.route')


router.use('/', morningRoute);
router.use('/', nightRoute);


module.exports = router;