const router = require("express").Router();
const signup = require('./signup');
const login = require('./login');

router.post('/signup', signup.dealerSignUp);
router.post('/login', login.dealerLogin);
module.exports = router;
