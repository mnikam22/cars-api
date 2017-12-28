var router = require("express").Router();
var user = require('./index');

router.get('/', user.getUser);
router.post('/dealer/signup', user.saveUser);

module.exports = router;