const router = require("express").Router();
const add = require('./add');
router.get('/makes', add.newListing);
module.exports = router;