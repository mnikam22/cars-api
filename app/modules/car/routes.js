const router = require("express").Router();
const add = require('./add');
const search = require('./search');
router.post('/add', add.addCar);
router.post('/search', search.searchCar);
module.exports = router;