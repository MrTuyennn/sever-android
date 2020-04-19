// user
const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const user = require('../controllers/user');

router.post('/signup', user.creatUser);
router.post('/loginuser', user.loginuser);


router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

module.exports = router;