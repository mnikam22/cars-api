const router = require("express").Router();
const add = require('./add');
router.get('/fetch_all_makes', add.fetchAllMakes);
module.exports = router;