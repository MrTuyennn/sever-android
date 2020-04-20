// user
const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const user = require('../controllers/user');

router.post('/signup', user.creatUser);
router.post('/loginuser', user.loginuser);
router.get('/getalluser', user.getalluser);
// router.get('/getuser/:id', user.getUser);
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());
router.get('/quanlynguoidung', user.getAllUser);

module.exports = router;