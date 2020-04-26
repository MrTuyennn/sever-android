// user
const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const user = require('../controllers/user');
// tạo user
router.post('/signup', user.creatUser);

// login user
router.post('/loginuser', user.loginuser);

// lấy toàn bộ người dùng
router.get('/getalluser', user.getalluser);

// lấy người dùng theo ID
router.get('/getuser/:id', user.getUser);

// lấy người dùng theo email address
router.get('/getuseremail/:email', user.getUseremail);

// lấy người dùng theo sdt  
router.get('/getuserphone/:phone', user.getUserphone);
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());
router.get('/quanlynguoidung', user.getAllUser);

module.exports = router;
/*
lam cai query trc
*/